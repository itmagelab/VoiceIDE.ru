/* VoiceIDE landing: переключатель RU/EN, появление блоков, копирование команд. */

const I18N = {
  ru: {
    'doc.title': 'VoiceIDE — разработка голосом с телефона',
    'doc.description': 'VoiceIDE — мобильное приложение для разработки: описывайте задачи голосом, получайте готовый план, проверяйте изменения и создавайте pull request.',
    'a11y.skip': 'К основному содержимому',
    'a11y.lang': 'Язык сайта',
    'a11y.sections': 'Разделы',
    'a11y.project': 'Проект',
    'a11y.terminal': 'Пример работы в терминале',
    'a11y.copy': 'Копировать',
    'a11y.copied': 'Скопировано',
    'brand.tag': 'Разработка голосом прямо с телефона',
    'nav.how': 'Как это работает',
    'nav.features': 'Возможности',
    'nav.screens': 'Скриншоты',
    'nav.install': 'Запуск',
    'cta.get': 'Как подключить',
    'hero.badge': 'Задача → План → Правки → Pull Request',
    'hero.title.a': 'Пишите код голосом',
    'hero.title.b': '— прямо с телефона.',
    'hero.lead': 'VoiceIDE поручает задачи ИИ-агенту, следит за ходом работы и показывает наглядные изменения по каждому файлу. Код попадает в репозиторий только после вашего одобрения.',
    'hero.cta.primary': 'Получить доступ',
    'hero.cta.secondary': 'Смотреть скриншоты',
    'hero.fact1': 'офлайн-диктовка',
    'hero.fact2': 'полный контроль изменений',
    'hero.fact3': 'безопасное подключение',
    'alt.projects': 'Список проектов и задач',
    'alt.plan': 'План изменений до написания кода',
    'alt.review': 'Проверка изменений по файлам',
    'alt.dictation': 'Диктовка новой задачи',
    'alt.running': 'Задача выполняется',
    'alt.dialog': 'Обсуждение задачи',
    'alt.pr': 'Созданный pull request',
    'alt.models': 'Настройки голосового ввода',
    'how.kicker': 'Простой сценарий',
    'how.title': 'Пять шагов от идеи до готового PR',
    'how.lead': 'ИИ-агент пишет код в изолированном окружении. Каждая правка и отправка изменений выполняются только по вашей команде.',
    'how.s1.title': 'Подключите репозиторий',
    'how.s1.text': 'Авторизуйтесь через GitHub и выберите проект — публичный или приватный.',
    'how.s2.title': 'Опишите задачу',
    'how.s2.text': 'Надиктуйте задачу голосом или напишите текстом. Выберите режим: составить план изменений или сразу писать код.',
    'how.s3.title': 'Следите за ходом работы',
    'how.s3.text': 'Вы в реальном времени видите статус выполнения задачи и список файлов, над которыми работает ИИ.',
    'how.s4.title': 'Проверьте изменения',
    'how.s4.text': 'Изучите разницу в коде: примите изменения, попросите агента доработать результат или оставьте комментарий.',
    'how.s5.title': 'Создайте PR',
    'how.s5.text': 'Подтвердите отправку, и приложение автоматически создаст ветку и готовый pull request на GitHub.',
    'how.note': 'Вы можете сначала обсудить пошаговый план изменений, а затем запустить написание кода в один клик.',
    'features.kicker': 'Возможности',
    'features.title': 'Всё необходимое для разработки на ходу',
    'features.lead': 'Управляйте процессом с экрана смартфона. Все изменения, коммиты и pull request создаются в вашем проекте под вашей учётной записью.',
    'features.1.title': 'Удобная диктовка',
    'features.1.text': 'Надиктуйте новую задачу, правку или комментарий к файлу. Текст расшифровки можно отредактировать перед отправкой.',
    'features.2.title': 'Речь без интернета',
    'features.2.text': 'Распознавание голоса работает прямо на телефоне. Аудио никуда не отправляется и не сохраняется на серверах.',
    'features.3.title': 'Обсуждение плана',
    'features.3.text': 'Агент проанализирует проект и предложит пошаговый план изменений. Обсудите его голосом перед тем, как писать код.',
    'features.4.title': 'Выбор модели',
    'features.4.text': 'Выбирайте подходящую ИИ-модель для каждой задачи — настройки сохранятся на протяжении всего обсуждения.',
    'features.5.title': 'Контроль в реальном времени',
    'features.5.text': 'Следите за каждым действием ИИ-агента. Пароли, ключи доступа и личные данные автоматически скрываются в логах.',
    'features.6.title': 'Удобное ревью',
    'features.6.text': 'Проверяйте изменения по каждому файлу отдельно: принимайте правки, просите переделать или пишите замечания.',
    'features.7.title': 'Умный контекст',
    'features.7.text': 'Агент помнит всю историю обсуждения и предыдущих правок, продолжая работу в рамках одной сессии.',
    'features.8.title': 'Никаких сюрпризов',
    'features.8.text': 'Новые ветки и pull request создаются только после вашего одобрения. Автоматических изменений в основной ветке нет.',
    'screens.kicker': 'Интерфейс',
    'screens.title': 'Как это выглядит на телефоне',
    'screens.lead': 'Интерфейс мобильного приложения на экране смартфона.',
    'screens.1.text': 'Диктовка задачи и выбор языка распознавания.',
    'screens.2.text': 'Пошаговый план изменений до внесения правок в код.',
    'screens.3.text': 'Статус выполнения задачи и ход работы в реальном времени.',
    'screens.4.text': 'Удобный просмотр изменений по файлам и принятие решений.',
    'screens.5.text': 'Голосовой запрос на доработку в той же сессии.',
    'screens.6.text': 'Проверка описания и названия pull request перед отправкой.',
    'screens.7.text': 'Настройки голосового ввода на устройстве.',
    'screens.8.text': 'Список проектов и задач — всё под рукой.',
    'install.kicker': 'Запуск',
    'install.title': 'Демо-сервер или свой',
    'install.lead': 'Начните работу за пару минут: используйте наш демонстрационный сервер или запустите собственный.',
    'install.a.title': 'Публичный демо-сервер',
    'install.a.text': 'Идеально для быстрого знакомства. Оцените возможности приложения мгновенно, без настройки серверов.',
    'install.a.cta': 'Написать автору',
    'install.b.title': 'Свой сервер',
    'install.b.text': 'Вы можете развернуть серверную часть на своем оборудовании одной Docker-командой. Потребуется свой домен и открытые порты.',
    'install.b.hint': 'Локальный сервер доступен на порту 8080, а для внешних подключений автоматически настраивается безопасное соединение.',
    'install.code.comment': '# настройки и ключи',
    'install.req.title': 'Что нужно для старта',
    'install.req.android': 'Смартфон на Android',
    'install.req.abi': 'Современный процессор',
    'install.req.github': 'Аккаунт GitHub',
    'install.req.llm': 'Ключ к ИИ-провайдеру',
    'install.req.1': 'версии 8.0 или новее с микрофоном.',
    'install.req.2': '— поддерживается большинство современных устройств.',
    'install.req.3': '— для подключения ваших проектов.',
    'install.req.4': '— если вы запускаете собственный сервер.',
    'install.note.a': 'Приложение находится в стадии закрытого тестирования. Напишите автору, чтобы получить ссылку на скачивание.',
    'install.note.b': 'Актуальная версия — v0.9.1.',
    'privacy.kicker': 'Безопасность',
    'privacy.title': 'Конфиденциальность по умолчанию',
    'privacy.1.title': 'Защита данных',
    'privacy.1.text': 'Все ключи доступа надежно шифруются. При отключении учетной записи все данные полностью удаляются.',
    'privacy.2.title': 'Ваш голос не пишется',
    'privacy.2.text': 'Мы не храним и не передаем записи вашего голоса. Офлайн-распознавание происходит прямо на смартфоне.',
    'privacy.3.title': 'Полный контроль',
    'privacy.3.text': 'ИИ-агент работает в изолированном окружении. Ни одно изменение не попадет в проект без вашего подтверждения.',
    'privacy.4.title': 'Защита от утечек',
    'privacy.4.text': 'Все пароли и ключи доступа автоматически скрываются в отчетах. История ваших запросов остается конфиденциальной.',
    'privacy.5.title': 'Безопасная песочница',
    'privacy.5.text': 'Действия ИИ-агента ограничены только безопасными командами. Проект защищен от вредоносного кода.',
    'privacy.6.title': 'Ваш аккаунт',
    'privacy.6.text': 'Все коммиты, ветки и pull request создаются строго под вашей учетной записью GitHub и только в выбранном проекте.',
    'cta.title': 'Опишите задачу голосом — код напишет ИИ',
    'cta.text': 'Подключите VoiceIDE к своему проекту и пишите код на ходу. План, генерация, проверка и создание PR — в едином удобном интерфейсе.',
    'cta.primary': 'Как подключить',
    'cta.secondary': 'Репозиторий на GitHub',
    'cta.note': 'Доступ к приложению предоставляется по запросу.',
    'footer.tag': 'Разработка голосом прямо с телефона',
    'footer.copy': 'Голосовая разработка приложений: от идеи до готового pull request.',
    'footer.col1': 'Разделы',
    'footer.col2': 'Проект',
    'footer.repo': 'Репозиторий',
    'footer.logic': 'Продукт и логика',
    'footer.stack': 'Технологии',
    'footer.dev': 'Разработка и запуск',
    'footer.privacy': 'Приватность',
    'footer.made': 'Сделано с телефона.'
  },

  en: {
    'doc.title': 'VoiceIDE — coding by voice from your phone',
    'doc.description': 'VoiceIDE is a mobile app for developers: describe tasks by voice, get a clear plan, review the changes, and create a pull request.',
    'a11y.skip': 'Skip to main content',
    'a11y.lang': 'Site language',
    'a11y.sections': 'Sections',
    'a11y.project': 'Project',
    'a11y.terminal': 'Example of work in the terminal',
    'a11y.copy': 'Copy',
    'a11y.copied': 'Copied',

    'brand.tag': 'Coding by voice, right from your phone',
    'nav.how': 'How it works',
    'nav.features': 'Features',
    'nav.screens': 'Screens',
    'nav.install': 'Get started',
    'cta.get': 'Get started',

    'hero.badge': 'Task → Plan → Changes → Pull Request',
    'hero.title.a': 'Write code by voice',
    'hero.title.b': '— right from your phone.',
    'hero.lead': 'VoiceIDE hands your task to an AI agent, follows the work, and shows clear changes for every file. Code reaches your repository only after you approve it.',
    'hero.cta.primary': 'Get access',
    'hero.cta.secondary': 'See screenshots',
    'hero.fact1': 'offline dictation',
    'hero.fact2': 'full control of changes',
    'hero.fact3': 'secure connection',

    'alt.projects': 'Project and task list',
    'alt.plan': 'Change plan before any code is written',
    'alt.review': 'Reviewing changes file by file',
    'alt.dictation': 'Dictating a new task',
    'alt.running': 'A task in progress',
    'alt.dialog': 'Discussing a task',
    'alt.pr': 'A pull request created',
    'alt.models': 'Voice input settings',

    'how.kicker': 'Simple workflow',
    'how.title': 'Five steps from idea to pull request',
    'how.lead': 'The AI agent writes code in an isolated environment. Every change and every pull request happens only when you say so.',
    'how.s1.title': 'Connect your project',
    'how.s1.text': 'Sign in with GitHub and pick a project — public or private.',
    'how.s2.title': 'Describe the task',
    'how.s2.text': 'Dictate the task or type it. Choose a mode: get a step-by-step plan first, or go straight to code.',
    'how.s3.title': 'Follow the progress',
    'how.s3.text': 'See the task status and the list of files the AI is working on, in real time.',
    'how.s4.title': 'Review the changes',
    'how.s4.text': 'Read the differences in code: accept the changes, ask the agent to refine the result, or leave a comment.',
    'how.s5.title': 'Create the PR',
    'how.s5.text': 'Confirm the submission, and the app creates the branch and a ready pull request on GitHub.',
    'how.note': 'You can discuss the step-by-step plan first, then start writing the code with a single tap.',

    'features.kicker': 'Features',
    'features.title': 'Everything you need to code on the go',
    'features.lead': 'Drive the whole process from your phone. Changes, commits, and pull requests are created in your project under your own account.',
    'features.1.title': 'Easy dictation',
    'features.1.text': 'Dictate a new task, a change, or a comment on a file. You can edit the transcript before sending.',
    'features.2.title': 'Speech without internet',
    'features.2.text': 'Speech recognition runs right on your phone. Audio is never uploaded and never stored on the servers.',
    'features.3.title': 'Discuss the plan',
    'features.3.text': 'The agent analyses your project and suggests a step-by-step plan. Discuss it by voice before any code is written.',
    'features.4.title': 'Pick the model',
    'features.4.text': 'Choose the AI model that fits the task — your choice is remembered for the whole discussion.',
    'features.5.title': 'Real-time control',
    'features.5.text': 'Follow every action of the AI agent. Passwords, access keys, and personal data are automatically hidden in the logs.',
    'features.6.title': 'Easy review',
    'features.6.text': 'Review each file separately: accept the changes, ask for a rework, or write comments.',
    'features.7.title': 'Smart context',
    'features.7.text': 'The agent remembers the whole discussion and previous revisions, continuing work in a single session.',
    'features.8.title': 'No surprises',
    'features.8.text': 'New branches and pull requests appear only after your approval. Nothing is changed in the main branch automatically.',

    'screens.kicker': 'Interface',
    'screens.title': 'What it looks like on a phone',
    'screens.lead': 'The mobile app interface on a smartphone screen.',
    'screens.1.text': 'Dictating a task and choosing the recognition language.',
    'screens.2.text': 'A step-by-step plan before any code changes.',
    'screens.3.text': 'Task status and progress in real time.',
    'screens.4.text': 'A convenient way to review changes file by file.',
    'screens.5.text': 'Asking for a revision by voice in the same session.',
    'screens.6.text': 'Checking the pull request title and description before sending.',
    'screens.7.text': 'Voice input settings on the device.',
    'screens.8.text': 'Projects and tasks — everything at hand.',

    'install.kicker': 'Get started',
    'install.title': 'Demo server or your own',
    'install.lead': 'Get started in minutes: use our demo server or run your own.',
    'install.a.title': 'Public demo server',
    'install.a.text': 'Ideal for a quick look. Try the app right away, without setting up any servers.',
    'install.a.cta': 'Contact the author',
    'install.b.title': 'Your own server',
    'install.b.text': 'You can deploy the server side on your own hardware with a single Docker command. You will need your own domain and open ports.',
    'install.b.hint': 'The local server runs on port 8080, and a secure connection is set up automatically for external access.',
    'install.code.comment': '# settings and keys',
    'install.req.title': 'What you need to start',
    'install.req.android': 'An Android phone',
    'install.req.abi': 'A modern processor',
    'install.req.github': 'A GitHub account',
    'install.req.llm': 'An AI provider key',
    'install.req.1': 'version 8.0 or newer with a microphone.',
    'install.req.2': '— most modern devices are supported.',
    'install.req.3': '— to connect your projects.',
    'install.req.4': '— if you run your own server.',
    'install.note.a': 'The app is in closed beta testing. Write to the author to get a download link.',
    'install.note.b': 'Current version — v0.9.1.',

    'privacy.kicker': 'Security',
    'privacy.title': 'Private by default',
    'privacy.1.title': 'Data protection',
    'privacy.1.text': 'All access keys are securely encrypted. When you disconnect your account, the data is fully deleted.',
    'privacy.2.title': 'Your voice is never recorded',
    'privacy.2.text': 'We never store or share recordings of your voice. Offline recognition happens right on your phone.',
    'privacy.3.title': 'Full control',
    'privacy.3.text': 'The AI agent works in an isolated environment. No change reaches your project without your confirmation.',
    'privacy.4.title': 'Protection from leaks',
    'privacy.4.text': 'All passwords and access keys are automatically hidden in the reports. Your request history stays confidential.',
    'privacy.5.title': 'Safe sandbox',
    'privacy.5.text': 'The AI agent is limited to safe commands only. Your project is protected from harmful code.',
    'privacy.6.title': 'Your account',
    'privacy.6.text': 'All commits, branches, and pull requests are created strictly under your GitHub account and only in the chosen project.',

    'cta.title': 'Describe the task by voice — the AI writes the code',
    'cta.text': 'Connect VoiceIDE to your project and write code on the go. Plan, generate, review, and create a PR in one convenient interface.',
    'cta.primary': 'Get started',
    'cta.secondary': 'Repository on GitHub',
    'cta.note': 'Access to the app is available on request.',

    'footer.tag': 'Coding by voice, right from your phone',
    'footer.copy': 'Voice-driven development for Android: from an idea to a ready pull request.',
    'footer.col1': 'Sections',
    'footer.col2': 'Project',
    'footer.repo': 'Repository',
    'footer.logic': 'Product behavior',
    'footer.stack': 'Technology stack',
    'footer.dev': 'Development and deployment',
    'footer.privacy': 'Privacy policy',
    'footer.made': 'Built from a phone.'
  }
};

const STORAGE_KEY = 'voiceide-lang';
const DEFAULT_LANG = 'ru';

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ru' || saved === 'en') return saved;
  } catch (err) {
    /* приватный режим — просто используем язык по умолчанию */
  }
  const nav = (navigator.language || '').toLowerCase();
  return nav && !nav.startsWith('ru') ? 'en' : DEFAULT_LANG;
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  const root = document.documentElement;

  root.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value !== undefined) el.alt = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      const value = dict[key];
      if (attr && value !== undefined) el.setAttribute(attr, value);
    });
  });

  document.title = dict['doc.title'];
  document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')
    .forEach((meta) => {
      const value = meta.getAttribute('property') === 'og:title' ? dict['doc.title'] : dict['doc.description'];
      if (value) meta.setAttribute('content', value);
    });

  document.querySelectorAll('[data-lang-set]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.langSet === lang));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (err) {
    /* игнорируем: язык просто не запомнится */
  }
}

/* --- переключатель языка --- */

document.querySelectorAll('[data-lang-set]').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.langSet));
});

/* --- появление блоков при прокрутке --- */

const revealTargets = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const revealer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealTargets.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealer.observe(el);
  });
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

/* --- тень шапки при прокрутке --- */

const header = document.querySelector('.site-header');

if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* --- копирование команд развёртывания --- */

document.querySelectorAll('[data-copy]').forEach((block) => {
  const button = block.querySelector('.copy-btn');
  const code = block.querySelector('pre');
  if (!button || !code) return;

  button.addEventListener('click', async () => {
    const dict = I18N[document.documentElement.lang] || I18N[DEFAULT_LANG];
    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      button.textContent = dict['a11y.copied'];
      button.classList.add('is-done');
    } catch (err) {
      button.textContent = code.textContent.trim().split('\n')[0];
    }
    setTimeout(() => {
      button.textContent = dict['a11y.copy'];
      button.classList.remove('is-done');
    }, 1800);
  });
});

applyLang(initialLang());
