export interface ActivityLink {
  readonly id: 'github' | 'x' | 'blog' | 'zenn' | 'qiita';
  readonly name: string;
  readonly description: string;
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
  linksHeading: '活動・発信',
  links: [
    {
      id: 'github',
      name: 'GitHub',
      description: '開発・制作物',
      url: 'https://github.com/haino357',
    },
    { id: 'x', name: 'X', description: '日々の発信', url: 'https://x.com/hai_haino' },
    {
      id: 'blog',
      name: 'はてなブログ',
      description: '記事・記録',
      url: 'https://hai-haino.hatenablog.com/',
    },
    { id: 'zenn', name: 'Zenn', description: '技術記事', url: 'https://zenn.dev/haitak' },
    { id: 'qiita', name: 'Qiita', description: '技術記事', url: 'https://qiita.com/hai_haino' },
  ] satisfies readonly ActivityLink[],
} as const;
