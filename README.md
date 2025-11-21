# フリーランス自己紹介ページ

React + TypeScriptで構築されたモダンなフリーランス向けポートフォリオサイトです。GitHub Pagesでの公開に対応しています。

## 🚀 特徴

- **React + TypeScript**: 型安全で保守性の高いコード
- **モダンなデザイン**: ダークモード、グラデーション、グラスモーフィズム効果
- **レスポンシブ**: モバイル、タブレット、デスクトップに完全対応
- **スムーズアニメーション**: Intersection Observerを使用したスクロールアニメーション
- **SEO最適化**: セマンティックHTML、メタタグ、Open Graph対応
- **高パフォーマンス**: Viteによる高速ビルド

## 📁 プロジェクト構成

```
SelfIntroductionPage/
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, About, Skills, Portfolio, Contact
│   │   └── common/         # 再利用可能なコンポーネント
│   ├── hooks/              # カスタムフック
│   ├── types/              # TypeScript型定義
│   ├── styles/             # グローバルスタイル
│   ├── App.tsx             # メインアプリケーション
│   └── main.tsx            # エントリーポイント
├── public/                 # 静的アセット
├── index.html              # HTMLテンプレート
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ 使用技術

- **React 18**: UIライブラリ
- **TypeScript**: 型安全な開発
- **Vite**: 高速ビルドツール
- **CSS Modules**: スコープ付きスタイリング
- **Google Fonts**: Inter & Outfit
- **Font Awesome**: アイコン

## ✏️ カスタマイズ方法

### 1. 個人情報の編集

`index.html` を開き、以下の部分を編集してください：

- **名前**: `<div class="logo">YourName</div>` と `<title>` タグ
- **職業・キャッチフレーズ**: ヒーローセクションの内容
- **About Me**: 自己紹介文
- **スキル**: スキルセクションのリスト
- **実績**: ポートフォリオアイテムの内容
- **連絡先**: メールアドレス、所在地、SNSリンク

### 2. プロフィール画像の変更

`images/profile.png` を自分の画像に置き換えてください。

### 3. 色のカスタマイズ

`css/style.css` の先頭にあるCSS変数を編集：

```css
:root {
  --color-primary: #6366f1;    /* メインカラー */
  --color-secondary: #06b6d4;  /* セカンダリカラー */
  --color-accent: #8b5cf6;     /* アクセントカラー */
  /* その他の色... */
}
```

## 🌐 GitHub Pagesでの公開方法

### 方法1: GitHub Web UIを使用

1. GitHubで新しいリポジトリを作成
2. ローカルのファイルをすべてアップロード
3. リポジトリの **Settings** → **Pages** に移動
4. **Source** で `main` ブランチを選択
5. **Save** をクリック
6. 数分後、`https://[あなたのユーザー名].github.io/[リポジトリ名]/` で公開されます

### 方法2: Gitコマンドラインを使用

```bash
# リポジトリの初期化
git init
git add .
git commit -m "Initial commit: Add portfolio website"

# GitHubリポジトリに接続（事前にGitHubでリポジトリを作成）
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
git branch -M main
git push -u origin main

# GitHub Pagesの設定はWeb UIで行う
```

## 🖥️ ローカルでの確認方法

### Python 3を使用

```bash
cd /Users/takayukishoji/Develop/SelfIntroDuctionPage
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開く

### Node.jsを使用（http-server）

```bash
npx http-server -p 8000
```

## 📧 お問い合わせフォームについて

現在のフォームはデモンストレーション用です。実際に機能させるには、以下のサービスを統合してください：

- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: Netlifyにデプロイする場合
- 独自のバックエンドAPI

## 📝 ライセンス

このテンプレートは自由に使用・カスタマイズできます。

## 🎨 デザインのヒント

- **配色**: [Coolors](https://coolors.co/) でカラーパレットを探す
- **フォント**: [Google Fonts](https://fonts.google.com/) で別のフォントを試す
- **アイコン**: [Font Awesome](https://fontawesome.com/) で追加アイコンを探す
- **画像**: [Unsplash](https://unsplash.com/) でプロフェッショナルな写真を探す

---

作成日: 2025年11月21日
