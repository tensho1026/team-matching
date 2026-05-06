export const techStacks = [
  'React',
  'Next.js',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'Neon',
  'Docker',
  'Figma',
]

export const focusAreas = [
  'フロントエンド',
  'バックエンド',
  'インフラ',
  'デザイン',
  'PM',
  'UI/UX',
]

export const developmentStyles = [
  'ガチ開発',
  'ゆるく個人開発',
  'ハッカソン',
  'ポートフォリオ作成',
  '就活用実績作り',
]

export const recruitingRoles = [
  { role: 'フロントエンド', count: '1人' },
  { role: 'バックエンド', count: '1人' },
  { role: 'デザイナー', count: '1人' },
]

export const recruitments = [
  {
    title: 'DevLink Board',
    summary: 'チーム開発メンバーを探せる募集掲示板',
    status: '募集中',
    level: '初心者歓迎',
    roles: ['フロントエンド 1人', 'バックエンド 1人'],
    stacks: ['React', 'NestJS', 'Neon'],
    period: '6週間',
    activity: '週8時間',
    matchRate: 92,
  },
  {
    title: 'Portfolio CMS',
    summary: '就活用の制作実績をまとめるヘッドレスCMS',
    status: '開発中',
    level: '中級者向け',
    roles: ['UI/UX 1人', 'PM 1人'],
    stacks: ['Next.js', 'Figma', 'PostgreSQL'],
    period: '2ヶ月',
    activity: '平日夜',
    matchRate: 78,
  },
  {
    title: 'Hackathon Kit',
    summary: '短期開発チーム向けのテンプレート共有サービス',
    status: '締切済み',
    level: '実務経験者向け',
    roles: ['インフラ 1人'],
    stacks: ['Docker', 'AWS', 'TypeScript'],
    period: '10日',
    activity: '土日集中',
    matchRate: 61,
  },
]

export const applicants = [
  {
    name: '佐藤 Ren',
    role: 'フロントエンド',
    status: '確認中',
    message: 'React と UI 実装を中心に参加できます。',
  },
  {
    name: 'Mika',
    role: 'デザイナー',
    status: '承認済み',
    message: 'Figma で画面設計とプロトタイプを担当できます。',
  },
]

export const matchingSignals = [
  { label: '技術スタック一致率', value: 92, detail: 'React / NestJS / Neon' },
  { label: '希望ロール一致', value: 88, detail: 'フロントエンド希望' },
  { label: '活動時間の一致', value: 74, detail: '平日夜と土曜' },
  { label: 'GitHub活動量', value: 69, detail: '直近30日で24 contributions' },
]

export const chatThreads = [
  { name: 'DevLink Board', message: '応募ありがとうございます。役割を確認します。' },
  { name: 'Portfolio CMS', message: 'Figma のリンクを共有しました。' },
  { name: 'Hackathon Kit', message: '次回ミーティングは土曜です。' },
]

export const teamMembers = [
  { name: 'Yuki', role: 'PM', status: '開発中' },
  { name: 'Ren', role: 'フロントエンド', status: '参加中' },
  { name: 'Mika', role: 'UI/UX', status: '参加中' },
  { name: 'Aoi', role: 'バックエンド', status: '募集中' },
]

export const reviewItems = [
  {
    project: 'DevLink Board',
    reviewer: 'Yuki',
    score: '4.8',
    body: 'Issue 分解とレビューの返しが早く、安心して任せられました。',
  },
  {
    project: 'Portfolio CMS',
    reviewer: 'Mika',
    score: '4.6',
    body: 'UI の意図を理解して、細かい状態まで丁寧に実装していました。',
  },
]

export const notifications = [
  { title: '新しい応募が届きました', meta: 'DevLink Board / 2分前' },
  { title: '参加申請が承認されました', meta: 'Portfolio CMS / 1時間前' },
  { title: 'チーム内メッセージがあります', meta: 'DevLink Board / 今日' },
  { title: '募集締切が近づいています', meta: 'Hackathon Kit / 明日' },
]
