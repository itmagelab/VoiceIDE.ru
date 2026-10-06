/* VoiceIDE landing: переключатель RU/EN, появление блоков, копирование команд. */

const I18N = {
  ru: {
    'doc.title': 'VoiceIDE — разработка с телефона голосом',
    'doc.description': 'VoiceIDE — Android-клиент и агентный backend: опишите задачу голосом, получите план, проверьте diff по файлам и опубликуйте pull request.',
    'a11y.skip': 'К основному содержимому',
    'a11y.lang': 'Язык сайта',
    'a11y.sections': 'Разделы',
    'a11y.project': 'Проект',
    'a11y.terminal': 'Пример сессии задачи в терминале',
    'a11y.copy': 'Копировать',
    'a11y.copied': 'Скопировано',

    'brand.tag': 'Агентный цикл разработки с телефона',
    'nav.how': 'Как это работает',
    'nav.features': 'Возможности',
    'nav.screens': 'Скриншоты',
    'nav.stack': 'Стек',
    'nav.install': 'Запуск',
    'cta.get': 'Как подключить',

    'hero.badge': 'Задача → план → правки → pull request',
    'hero.title.a': 'Опишите задачу',
    'hero.title.b': 'голосом — с телефона.',
    'hero.lead': 'VoiceIDE отдаёт агенту задачу, следит за его работой и показывает результат по файлам. Всё, что попадёт в репозиторий, вы подтверждаете сами.',
    'hero.cta.primary': 'Получить доступ',
    'hero.cta.secondary': 'Смотреть скриншоты',
    'hero.fact1': 'диктовка офлайн',
    'hero.fact2': 'агент на своём сервере',
    'hero.fact3': 'PR только с подтверждением',

    'alt.projects': 'Список проектов и задач VoiceIDE',
    'alt.plan': 'План реализации до сборки',
    'alt.review': 'Ревью изменений по файлам',
    'alt.dictation': 'Диктовка новой задачи',
    'alt.running': 'Задача выполняется агентом',
    'alt.dialog': 'Диалог с агентом',
    'alt.pr': 'Созданный pull request',
    'alt.models': 'Настройки голосового ввода и моделей',

    'how.kicker': 'Сценарий',
    'how.title': 'Пять шагов от фразы до pull request',
    'how.lead': 'Ничего не публикуется само: агент работает в отдельной рабочей копии, а решение по каждому файлу принимаете вы.',
    'how.s1.title': 'Подключите GitHub',
    'how.s1.text': 'OAuth Device Flow, затем выбор публичного или приватного репозитория размером до 500 МБ.',
    'how.s2.title': 'Опишите задачу',
    'how.s2.text': 'Голосом на русском или английском либо текстом. Выберите модель агента и режим хода: план или сборка.',
    'how.s3.title': 'Следите за работой',
    'how.s3.text': 'Очередь, рабочая копия и отдельное рабочее пространство на задачу. В журнале видно инструменты, команды и пути.',
    'how.s4.title': 'Проверьте изменения',
    'how.s4.text': 'Diff по файлам: принять файл, попросить агента о правке или оставить заметку. Правки идут в ту же сессию.',
    'how.s5.title': 'Опубликуйте PR',
    'how.s5.text': 'Заголовок, описание и явное подтверждение. Worker создаёт ветку и pull request; слияние — только ваше.',
    'how.note': 'Так выглядит цикл задачи: план и сборка — два разных агента с разными инструментами.',

    'features.kicker': 'Возможности',
    'features.title': 'Всё, что нужно, чтобы не садиться за компьютер',
    'features.lead': 'Приложение управляет агентом и показывает его работу. Код, коммиты и pull request остаются в вашем репозитории и под вашим аккаунтом.',
    'features.1.title': 'Диктовка задач',
    'features.1.text': 'Надиктуйте новую задачу, уточнение, комментарий к PR или заметку к файлу. Текст распознавания редактируется перед отправкой.',
    'features.2.title': 'Речь без сети',
    'features.2.text': 'Системный сервис устройства либо локальные модели Whisper Tiny и Parakeet v3. Аудио не сохраняется и не уходит в сеть.',
    'features.3.title': 'Режим плана',
    'features.3.text': 'План-агент изучает репозиторий без инструментов записи. Обсудите план голосом, а сборку запустите одним тапом.',
    'features.4.title': 'Модель на задачу',
    'features.4.text': 'Каталог провайдеров и моделей приходит с сервера. Выбор сохраняется в задаче и действует на все её ходы.',
    'features.5.title': 'Журнал выполнения',
    'features.5.text': 'Таймлайн действий агента, использованные инструменты, команды и затронутые пути. Секреты маскируются.',
    'features.6.title': 'Ревью по файлам',
    'features.6.text': 'Принять файл, попросить правки, оставить заметку. «Принять все» можно отменить, а решения — изменить.',
    'features.7.title': 'Работа в одной сессии',
    'features.7.text': 'Замечания возвращаются агенту в тот же воркспейс: контекст обсуждения плана и правок сохраняется между ходами.',
    'features.8.title': 'PR без сюрпризов',
    'features.8.text': 'Публикация только после вашего подтверждения, в отдельную ветку. Автоматического слияния нет.',

    'screens.kicker': 'Интерфейс',
    'screens.title': 'Как это выглядит на телефоне',
    'screens.lead': 'Реальные экраны текущей версии приложения.',
    'screens.1.text': 'Диктовка задачи с выбором языка и движка распознавания.',
    'screens.2.text': 'План целиком: подход, файлы, проверки — до первого изменения кода.',
    'screens.3.text': 'Статус задачи и свежие события журнала во время работы агента.',
    'screens.4.text': 'Diff крупно, решение по каждому файлу: принять, правки или заметка.',
    'screens.5.text': 'Запрос правки голосом — агент продолжает в том же воркспейсе.',
    'screens.6.text': 'Проверка заголовка и описания PR перед подтверждением публикации.',
    'screens.7.text': 'Локальные модели речи: скачать, выбрать или удалить.',
    'screens.8.text': 'Проекты, задачи и их состояние — весь контекст работы с телефона.',

    'stack.kicker': 'Технологии',
    'stack.title': 'Телефон, Rust и контейнеры',
    'stack.lead': 'Агент запускается на вашем сервере в отдельном окружении: у него есть инструменты разработки и список запрещённых команд.',
    'stack.client': 'Клиент Android',
    'stack.backend': 'Backend и агент',
    'stack.infra': 'Развёртывание',
    'stack.https': 'HTTPS из коробки',
    'stack.profiles': 'Профили rust / android / full',

    'install.kicker': 'Запуск',
    'install.title': 'Демо-сервер или свой',
    'install.lead': 'При первом старте приложение предлагает два пути: общий демо-инстанс или сервер, который вы подняли сами.',
    'install.a.title': 'Публичный демо-сервер',
    'install.a.text': 'Готовый общий инстанс, чтобы попробовать сценарий сразу. Подходит, чтобы оценить приложение без своей инфраструктуры.',
    'install.a.cta': 'Написать автору',
    'install.b.title': 'Свой сервер',
    'install.b.text': 'Весь стек в одном Compose-файле: API, worker, Runtime агента и PostgreSQL. Нужен домен с DNS на ваш сервер и открытые порты 80/443.',
    'install.b.hint': 'Локально API доступен на http://127.0.0.1:8080, снаружи — через Caddy с HTTPS.',
    'install.code.comment': '# ключи и пароли',
    'install.req.title': 'Что нужно',
    'install.req.android': 'Android 8.0 (API 26)',
    'install.req.abi': 'arm64-v8a',
    'install.req.github': 'Аккаунт GitHub',
    'install.req.llm': 'Ключ LLM-провайдера',
    'install.req.1': 'или новее — современный смартфон с микрофоном.',
    'install.req.2': '— APK под другие ABI собираются отдельно.',
    'install.req.3': '— чтобы подключить репозиторий.',
    'install.req.4': '— если поднимаете свой сервер.',
    'install.note.a': 'Сборки лежат в закрытом репозитории: напишите автору, и вы получите ссылку на APK нужной архитектуры.',
    'install.note.b': 'Актуальная версия — v0.9.1.',

    'privacy.kicker': 'Доверие',
    'privacy.title': 'Приватность по умолчанию',
    'privacy.1.title': 'Токены зашифрованы',
    'privacy.1.text': 'OAuth-токены GitHub хранятся в PostgreSQL в виде AES-256-GCM. Отключение GitHub удаляет токен из VoiceIDE.',
    'privacy.2.title': 'Аудио не хранится',
    'privacy.2.text': 'Диктовка не сохраняет записи и историю фраз. Локальные модели распознают речь прямо на устройстве.',
    'privacy.3.title': 'Ничего не публикуется молча',
    'privacy.3.text': 'Изменения остаются в рабочем пространстве, пока вы явно не подтвердите создание pull request.',
    'privacy.4.title': 'Секреты маскируются',
    'privacy.4.text': 'В журнале выполнения значения маскируются; содержимое файлов и внутренние рассуждения модели не сохраняются.',
    'privacy.5.title': 'Агент в песочнице',
    'privacy.5.text': 'Runtime ограничен списком команд, а операции GitHub выполняет worker вне контейнера агента.',
    'privacy.6.title': 'Ваш аккаунт',
    'privacy.6.text': 'Коммиты, ветки и pull request создаются от имени подключённого GitHub-аккаунта и только вашего репозитория.',

    'cta.title': 'Опишите задачу — код напишет агент',
    'cta.text': 'Подключите VoiceIDE к своему репозиторию и ведите разработку с телефона: план, правки, ревью и pull request в одном сценарии.',
    'cta.primary': 'Как подключить',
    'cta.secondary': 'Репозиторий на GitHub',
    'cta.note': 'Репозиторий закрытый — доступ к сборкам по запросу.',

    'footer.tag': 'Агентный цикл разработки с телефона',
    'footer.copy': 'Android-клиент и backend, которые превращают голосовое описание задачи в проверенный pull request.',
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
    'doc.title': 'VoiceIDE — AI-assisted coding from your phone',
    'doc.description': 'VoiceIDE is an Android client and an agent backend: dictate a task, read the plan, review the diff file by file, and publish a pull request.',
    'a11y.skip': 'Skip to main content',
    'a11y.lang': 'Site language',
    'a11y.sections': 'Sections',
    'a11y.project': 'Project',
    'a11y.terminal': 'Example task session in a terminal',
    'a11y.copy': 'Copy',
    'a11y.copied': 'Copied',

    'brand.tag': 'An agentic dev loop from your phone',
    'nav.how': 'How it works',
    'nav.features': 'Features',
    'nav.screens': 'Screens',
    'nav.stack': 'Stack',
    'nav.install': 'Get started',
    'cta.get': 'Get started',

    'hero.badge': 'Task → plan → changes → pull request',
    'hero.title.a': 'Describe the task',
    'hero.title.b': 'by voice — from your phone.',
    'hero.lead': 'VoiceIDE hands the task to an AI agent, follows the work, and shows the result file by file. Nothing reaches your repository until you confirm it.',
    'hero.cta.primary': 'Get access',
    'hero.cta.secondary': 'See screenshots',
    'hero.fact1': 'offline dictation',
    'hero.fact2': 'agent on your server',
    'hero.fact3': 'PRs only after review',

    'alt.projects': 'VoiceIDE project and task list',
    'alt.plan': 'Implementation plan before the build',
    'alt.review': 'Reviewing changes file by file',
    'alt.dictation': 'Dictating a new task',
    'alt.running': 'A task running on the agent',
    'alt.dialog': 'Talking to the agent',
    'alt.pr': 'A pull request created',
    'alt.models': 'Voice input settings and speech models',

    'how.kicker': 'Workflow',
    'how.title': 'Five steps from a sentence to a pull request',
    'how.lead': 'Nothing is published on its own: the agent works in a separate working copy, and you decide for every file.',
    'how.s1.title': 'Connect GitHub',
    'how.s1.text': 'OAuth Device Flow, then pick a public or private repository of up to 500 MB.',
    'how.s2.title': 'Describe the task',
    'how.s2.text': 'In Russian or English by voice, or as text. Choose the agent model and the turn mode: plan or build.',
    'how.s3.title': 'Follow the work',
    'how.s3.text': 'A queue, a working copy, and a workspace per task. The log shows tools, commands, and paths.',
    'how.s4.title': 'Review the changes',
    'how.s4.text': 'Diff per file: accept it, ask the agent for changes, or leave a note. Feedback continues the same session.',
    'how.s5.title': 'Publish the PR',
    'how.s5.text': 'Title, description, and an explicit confirmation. The worker creates the branch and the pull request; merging stays yours.',
    'how.note': 'That is the task loop: planning and building are two separate agents with different tools.',

    'features.kicker': 'Features',
    'features.title': 'Everything needed to stay off the desktop',
    'features.lead': 'The app drives the agent and shows how it works. Code, commits, and pull requests stay in your repository under your account.',
    'features.1.title': 'Dictate a task',
    'features.1.text': 'Dictate a new task, a follow-up, a pull request comment, or a file note. The transcript is editable before sending.',
    'features.2.title': 'Speech without a network',
    'features.2.text': 'The device speech service, or local Whisper Tiny and Parakeet v3 models. Audio is neither stored nor uploaded.',
    'features.3.title': 'Plan mode',
    'features.3.text': 'The planning agent studies the repository with no file-writing tools. Discuss the plan by voice, then start the build with one tap.',
    'features.4.title': 'Model per task',
    'features.4.text': 'The provider and model catalog comes from the server. Your choice is stored in the task and used for every turn.',
    'features.5.title': 'Run log',
    'features.5.text': 'A timeline of agent actions, the tools it used, commands, and touched paths. Secrets are masked.',
    'features.6.title': 'Review per file',
    'features.6.text': 'Accept a file, request changes, or leave a note. "Accept all" can be undone, and decisions stay editable.',
    'features.7.title': 'One session, many turns',
    'features.7.text': 'Feedback goes back to the same workspace, so plan discussions and revisions survive between turns.',
    'features.8.title': 'No surprise PRs',
    'features.8.text': 'Publishing happens only after your confirmation, into a separate branch. Nothing is merged automatically.',

    'screens.kicker': 'Interface',
    'screens.title': 'What it looks like on a phone',
    'screens.lead': 'Real screens from the current app version.',
    'screens.1.text': 'Dictating a task with language and recognition engine selection.',
    'screens.2.text': 'The full plan: approach, files, and checks — before any code changes.',
    'screens.3.text': 'Task status and fresh log events while the agent works.',
    'screens.4.text': 'Diff in focus, one decision per file: accept, revise, or note.',
    'screens.5.text': 'Requesting a revision by voice — the agent continues in the same workspace.',
    'screens.6.text': 'Checking the pull request title and description before publishing.',
    'screens.7.text': 'Local speech models: download, select, or remove.',
    'screens.8.text': 'Projects, tasks, and their state — the whole picture from a phone.',

    'stack.kicker': 'Technology',
    'stack.title': 'A phone, Rust, and containers',
    'stack.lead': 'The agent runs on your server in its own environment, with developer tooling available and a list of forbidden commands.',
    'stack.client': 'Android client',
    'stack.backend': 'Backend and agent',
    'stack.infra': 'Deployment',
    'stack.https': 'HTTPS out of the box',
    'stack.profiles': 'rust / android / full profiles',

    'install.kicker': 'Get started',
    'install.title': 'Demo server or your own',
    'install.lead': 'On first launch the app offers two paths: a shared demo instance, or a server you host yourself.',
    'install.a.title': 'Public demo server',
    'install.a.text': 'A ready shared instance to try the whole flow right away — useful before setting up your own infrastructure.',
    'install.a.cta': 'Contact the author',
    'install.b.title': 'Your own server',
    'install.b.text': 'The whole stack in one Compose file: API, worker, agent runtime, and PostgreSQL. You need a domain pointing at your server and ports 80/443 open.',
    'install.b.hint': 'Locally the API is at http://127.0.0.1:8080; from outside, Caddy serves HTTPS.',
    'install.code.comment': '# keys and secrets',
    'install.req.title': 'Requirements',
    'install.req.android': 'Android 8.0 (API 26)',
    'install.req.abi': 'arm64-v8a',
    'install.req.github': 'A GitHub account',
    'install.req.llm': 'An LLM provider key',
    'install.req.1': 'or newer — a modern smartphone with a microphone.',
    'install.req.2': '— APKs for other ABIs are built separately.',
    'install.req.3': '— to connect a repository.',
    'install.req.4': '— if you host the server yourself.',
    'install.note.a': 'Builds live in a private repository: ask the author and you will get a link to the APK for your architecture.',
    'install.note.b': 'Current version — v0.9.1.',

    'privacy.kicker': 'Trust',
    'privacy.title': 'Private by default',
    'privacy.1.title': 'Encrypted tokens',
    'privacy.1.text': 'GitHub OAuth tokens are stored in PostgreSQL as AES-256-GCM. Disconnecting GitHub deletes the token from VoiceIDE.',
    'privacy.2.title': 'Audio is not stored',
    'privacy.2.text': 'Dictation keeps neither recordings nor a history of what you said. Local models recognize speech on the device.',
    'privacy.3.title': 'Nothing is published silently',
    'privacy.3.text': 'Changes stay in the workspace until you explicitly confirm creating a pull request.',
    'privacy.4.title': 'Secrets are masked',
    'privacy.4.text': 'Values are masked in the run log; file contents and the model’s internal reasoning are not stored.',
    'privacy.5.title': 'The agent is fenced in',
    'privacy.5.text': 'The runtime is limited by a command allowlist, and GitHub operations run in the worker outside the agent container.',
    'privacy.6.title': 'Your account',
    'privacy.6.text': 'Commits, branches, and pull requests use the connected GitHub account and only your repository.',

    'cta.title': 'Describe the task — the agent writes the code',
    'cta.text': 'Connect VoiceIDE to your repository and keep developing from your phone: plan, changes, review, and a pull request in one flow.',
    'cta.primary': 'Get started',
    'cta.secondary': 'Repository on GitHub',
    'cta.note': 'The repository is private — builds are shared on request.',

    'footer.tag': 'An agentic dev loop from your phone',
    'footer.copy': 'An Android client and backend that turn a dictated task into a reviewed pull request.',
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
