// Собирает assets/img/og-image.png — превью сайта для соцсетей и поиска.
//
// Запуск (macOS, без зависимостей):
//   swift tools/make-og-image.swift [assets/img]
//
// Макет повторяет первый экран сайта: слева текст, справа три телефона
// со скриншотами приложения. Картинки берутся из assets/img — это копии
// contrib/release-assets/ из основного репозитория VoiceIDE.

import AppKit
import CoreGraphics
import CoreText
import Foundation
import ImageIO
import UniformTypeIdentifiers

// ---------- палитра gruvbox light (та же, что в assets/style.css) ----------

func color(_ hex: UInt32, _ alpha: Double = 1) -> CGColor {
    CGColor(
        red: CGFloat((hex >> 16) & 0xff) / 255,
        green: CGFloat((hex >> 8) & 0xff) / 255,
        blue: CGFloat(hex & 0xff) / 255,
        alpha: CGFloat(alpha)
    )
}

let bg = color(0xfbf1c7)
let bgHard = color(0xf9f5d7)
let bgSoft = color(0xf2e5bc)
let bg2 = color(0xd5c4a1)
let fg = color(0x3c3836)
let fg1 = color(0x504945)
let orange = color(0xd65d0e)
let orangeBright = color(0xfe8019)
let greenBright = color(0xb8bb26)

let canvasWidth = 1200.0
let canvasHeight = 630.0

// ---------- холст ----------

guard let ctx = CGContext(
    data: nil,
    width: Int(canvasWidth),
    height: Int(canvasHeight),
    bitsPerComponent: 8,
    bytesPerRow: 0,
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
    fatalError("cannot create bitmap context")
}

// Работаем в системе координат с началом в левом верхнем углу.
ctx.translateBy(x: 0, y: canvasHeight)
ctx.scaleBy(x: 1, y: -1)
ctx.textMatrix = CGAffineTransform(scaleX: 1, y: -1)

// ---------- фон: точки и два мягких пятна ----------

ctx.setFillColor(bg)
ctx.fill(CGRect(x: 0, y: 0, width: canvasWidth, height: canvasHeight))

func glow(center: CGPoint, radius: Double, tint: CGColor) {
    guard let gradient = CGGradient(
        colorsSpace: CGColorSpaceCreateDeviceRGB(),
        colors: [tint, tint.copy(alpha: 0)!] as CFArray,
        locations: [0, 1]
    ) else { return }
    ctx.saveGState()
    ctx.drawRadialGradient(
        gradient,
        startCenter: center,
        startRadius: 0,
        endCenter: center,
        endRadius: radius,
        options: [.drawsBeforeStartLocation, .drawsAfterEndLocation]
    )
    ctx.restoreGState()
}

glow(center: CGPoint(x: canvasWidth * 0.12, y: -canvasHeight * 0.10), radius: 620, tint: color(0xfe8019, 0.13))
glow(center: CGPoint(x: canvasWidth * 0.88, y: canvasHeight * 0.04), radius: 560, tint: color(0xb38800, 0.12))

ctx.setFillColor(bg2)
var dotY = 0.0
while dotY < canvasHeight {
    var dotX = 0.0
    while dotX < canvasWidth {
        ctx.fillEllipse(in: CGRect(x: dotX - 0.9, y: dotY - 0.9, width: 1.8, height: 1.8))
        dotX += 26
    }
    dotY += 26
}

// ---------- шрифты ----------

func firstAvailableFont(_ names: [String], _ size: Double) -> CTFont {
    for name in names {
        let font = CTFontCreateWithName(name as CFString, size, nil)
        if CTFontGetGlyphCount(font) > 0 && (name as CFString) == CTFontCopyPostScriptName(font) {
            return font
        }
    }
    return CTFontCreateWithName(names.first! as CFString, size, nil)
}

let sansBold = firstAvailableFont(["AvenirNext-DemiBold", "HelveticaNeue-Bold", "Lato-Bold"], 44)
let sansMedium = firstAvailableFont(["AvenirNext-DemiBold", "HelveticaNeue-Medium", "Lato-Semibold"], 17)
let sansRegular = firstAvailableFont(["AvenirNext-Regular", "HelveticaNeue-Regular", "Lato-Regular"], 18)
let monoBold = firstAvailableFont(["Menlo-Bold", "SFMono-Bold", "Courier-Bold"], 13)
let monoRegular = firstAvailableFont(["Menlo-Regular", "SFMono-Regular", "Courier"], 13)

// ---------- текст ----------

func attributed(_ text: String, _ font: CTFont, _ color: CGColor) -> NSAttributedString {
    NSAttributedString(
        string: text,
        attributes: [
            .font: font,
            .foregroundColor: color,
        ]
    )
}

@discardableResult
func drawLine(
    _ text: String,
    _ font: CTFont,
    _ textColor: CGColor,
    x: Double,
    baseline: Double
) -> Double {
    let line = CTLineCreateWithAttributedString(attributed(text, font, textColor))
    ctx.textPosition = CGPoint(x: x, y: baseline)
    CTLineDraw(line, ctx)
    return Double(CTLineGetTypographicBounds(line, nil, nil, nil))
}

// Разбивка текста на строки: в перевёрнутом холсте CoreText верстает абзац
// снизу вверх, поэтому строки переносим сами.
func wrap(_ text: String, _ font: CTFont, _ width: Double) -> [String] {
    var lines: [String] = []
    var current = ""
    for word in text.split(separator: " ") {
        let candidate = current.isEmpty ? String(word) : current + " " + word
        let line = CTLineCreateWithAttributedString(attributed(candidate, font, fg1))
        let lineWidth = Double(CTLineGetTypographicBounds(line, nil, nil, nil))
        if lineWidth > width, !current.isEmpty {
            lines.append(current)
            current = String(word)
        } else {
            current = candidate
        }
    }
    if !current.isEmpty { lines.append(current) }
    return lines
}

func drawParagraph(
    _ text: String,
    _ font: CTFont,
    _ textColor: CGColor,
    x: Double,
    top: Double,
    width: Double,
    lineHeight: Double
) -> Double {
    let lines = wrap(text, font, width)
    let ascent = Double(CTFontGetAscent(font))
    for (index, line) in lines.enumerated() {
        drawLine(line, font, textColor, x: x, baseline: top + ascent + Double(index) * lineHeight)
    }
    return Double(lines.count) * lineHeight
}

// ---------- простые фигуры ----------

func fillRoundRect(_ rect: CGRect, radius: Double, fill fillColor: CGColor, stroke: CGColor? = nil, lineWidth: Double = 1) {
    let path = CGPath(roundedRect: rect, cornerWidth: radius, cornerHeight: radius, transform: nil)
    ctx.addPath(path)
    ctx.setFillColor(fillColor)
    ctx.fillPath()
    if let stroke {
        ctx.addPath(path)
        ctx.setStrokeColor(stroke)
        ctx.setLineWidth(lineWidth)
        ctx.strokePath()
    }
}

// ---------- картинки ----------

func loadImage(_ path: String) -> CGImage? {
    guard
        let source = CGImageSourceCreateWithURL(URL(fileURLWithPath: path) as CFURL, nil),
        let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
    else { return nil }
    return image
}

func drawImage(_ image: CGImage, in rect: CGRect) {
    ctx.saveGState()
    ctx.translateBy(x: rect.minX, y: rect.maxY)
    ctx.scaleBy(x: 1, y: -1)
    ctx.draw(image, in: CGRect(x: 0, y: 0, width: rect.width, height: rect.height))
    ctx.restoreGState()
}

// Телефон: тёмная рамка, внутри — скриншот приложения.
func drawPhone(
    _ image: CGImage,
    center: CGPoint,
    width: Double,
    angle: Double,
    frameRatio: Double = 0.055
) {
    let height = width * 2424.0 / 1080.0
    let inset = width * frameRatio
    let radius = width * 0.135

    ctx.saveGState()
    ctx.translateBy(x: center.x, y: center.y)
    ctx.rotate(by: angle)

    let frame = CGRect(x: -width / 2, y: -height / 2, width: width, height: height)

    ctx.saveGState()
    ctx.setShadow(offset: CGSize(width: 0, height: 16), blur: 34, color: color(0x282828, 0.30))
    fillRoundRect(frame, radius: radius, fill: color(0x1d1d1d))
    ctx.restoreGState()

    let screen = frame.insetBy(dx: inset, dy: inset)
    ctx.saveGState()
    ctx.addPath(CGPath(roundedRect: screen, cornerWidth: radius * 0.72, cornerHeight: radius * 0.72, transform: nil))
    ctx.clip()
    drawImage(image, in: screen)
    ctx.restoreGState()

    ctx.restoreGState()
}

// ---------- содержимое ----------

let imageDir = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "assets/img"

guard
    let tasksShot = loadImage("\(imageDir)/01-tasks.png"),
    let newTaskShot = loadImage("\(imageDir)/02-new-task.png"),
    let reviewShot = loadImage("\(imageDir)/04-review-diff.png")
else {
    fatalError("cannot load screenshots from \(imageDir)")
}
let left = 44.0

// Плашка над заголовком.
let badge = "Задача → План → Правки → Pull Request"
let badgeWidth = drawLine(badge, monoBold, fg1, x: 0, baseline: -1000) + 34
fillRoundRect(
    CGRect(x: left, y: 62, width: badgeWidth, height: 32),
    radius: 16,
    fill: bgHard,
    stroke: bg2
)
ctx.setFillColor(greenBright)
ctx.fillEllipse(in: CGRect(x: left + 16, y: 73, width: 10, height: 10))
drawLine(badge, monoBold, fg1, x: left + 34, baseline: 83)

// Заголовок.
drawLine("Пишите код голосом", sansBold, fg, x: left, baseline: 168)
drawLine("— прямо с телефона.", sansBold, orange, x: left, baseline: 224)

// Лид.
let leadHeight = drawParagraph(
    "VoiceIDE поручает задачи ИИ-агенту, следит за ходом работы и показывает наглядные изменения по каждому файлу. Код попадает в репозиторий только после вашего одобрения.",
    sansRegular,
    fg1,
    x: left,
    top: 262,
    width: 500,
    lineHeight: 29
)

// Кнопки.
let buttonsTop = 262 + leadHeight + 26
let primaryText = "Получить доступ"
let primaryWidth = drawLine(primaryText, sansMedium, fg, x: 0, baseline: -1000) + 40
let ghostText = "Смотреть скриншоты"
let ghostWidth = drawLine(ghostText, sansMedium, fg, x: 0, baseline: -1000) + 40

ctx.saveGState()
ctx.setShadow(offset: CGSize(width: 0, height: 3), blur: 0, color: orange)
fillRoundRect(
    CGRect(x: left, y: buttonsTop, width: primaryWidth, height: 44),
    radius: 10,
    fill: orangeBright
)
ctx.restoreGState()
drawLine(primaryText, sansMedium, color(0x2b2118), x: left + 20, baseline: buttonsTop + 28)

fillRoundRect(
    CGRect(x: left + primaryWidth + 12, y: buttonsTop, width: ghostWidth, height: 44),
    radius: 10,
    fill: bgSoft,
    stroke: bg2
)
drawLine(ghostText, sansMedium, fg, x: left + primaryWidth + 32, baseline: buttonsTop + 28)

// Чипы.
let chips: [(String, CGColor, CGColor, CGColor)] = [
    ("Android 8.0+", color(0xd65d0e), color(0xe5b189), color(0xfbe6cd)),
    ("офлайн-диктовка", color(0x3f7341), color(0xa6c9a7), color(0xdcebd8)),
    ("полный контроль изменений", color(0x346a6d), color(0x9cc3c5), color(0xd6e7e8)),
    ("безопасное подключение", color(0x63671a), color(0xc3c772), color(0xe6e7bd)),
]

var chipX = left
var chipY = buttonsTop + 62
for (text, textColor, border, fill) in chips {
    let textWidth = drawLine(text, monoRegular, textColor, x: 0, baseline: -1000)
    let chipWidth = textWidth + 26
    if chipX + chipWidth > left + 520 {
        chipX = left
        chipY += 34
    }
    fillRoundRect(
        CGRect(x: chipX, y: chipY, width: chipWidth, height: 28),
        radius: 14,
        fill: fill,
        stroke: border
    )
    drawLine(text, monoRegular, textColor, x: chipX + 13, baseline: chipY + 19)
    chipX += chipWidth + 10
}

// Телефоны.
drawPhone(
    tasksShot,
    center: CGPoint(x: 735, y: 250),
    width: 225,
    angle: -0.13
)
drawPhone(
    reviewShot,
    center: CGPoint(x: 1056, y: 245),
    width: 225,
    angle: 0.13
)
drawPhone(
    newTaskShot,
    center: CGPoint(x: 890, y: 318),
    width: 300,
    angle: 0
)

// ---------- сохранение ----------

guard
    let image = ctx.makeImage(),
    let destination = CGImageDestinationCreateWithURL(
        URL(fileURLWithPath: "\(imageDir)/og-image.png") as CFURL,
        UTType.png.identifier as CFString,
        1,
        nil
    )
else {
    fatalError("cannot create png destination")
}
CGImageDestinationAddImage(destination, image, nil)
guard CGImageDestinationFinalize(destination) else {
    fatalError("cannot write png")
}
print("wrote \(imageDir)/og-image.png (\(Int(canvasWidth))x\(Int(canvasHeight)))")
