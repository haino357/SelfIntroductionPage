export interface ActivityLink {
  readonly id: 'github' | 'blog' | 'zenn' | 'qiita' | 'note';
  readonly name: string;
  readonly description: string;
  readonly url: string;
}

export interface SocialProfile {
  readonly id: 'x' | 'instagram';
  readonly name: string;
  readonly handle: string;
  readonly url: string;
}

// 設計書第5節の掲載候補。公開前に文案・メール・リンク先を最終確認する。
export const profile = {
  brand: 'Re:system',
  role: 'モバイル・フロントエンドエンジニア',
  introduction: [
    '関西を拠点に、アプリとWebをつくっています。',
    '開発のこと、日々の学び、コミュニティのこと。',
    '活動と連絡先をここにまとめました。',
  ],
  email: 'tosho427.sysdiv@gmail.com',
  contactLabel: 'メールで問い合わせる',
  socials: [
    {
      id: 'x',
      name: 'X',
      handle: '@hai_haino',
      url: 'https://x.com/hai_haino',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@hai_haino278',
      url: 'https://www.instagram.com/hai_haino278',
    },
  ] satisfies readonly SocialProfile[],
  linksHeading: '活動・発信',
  links: [
    {
      id: 'github',
      name: 'GitHub',
      description: '開発・制作物',
      url: 'https://github.com/haino357',
    },
    {
      id: 'blog',
      name: 'はてなブログ',
      description: '記事・記録',
      url: 'https://hai-haino.hatenablog.com/',
    },
    { id: 'zenn', name: 'Zenn', description: '技術記事', url: 'https://zenn.dev/haitak' },
    { id: 'qiita', name: 'Qiita', description: '技術記事', url: 'https://qiita.com/hai_haino' },
    { id: 'note', name: 'note', description: '思考・学びの記録', url: 'https://note.com/hainote' },
  ] satisfies readonly ActivityLink[],
} as const;
