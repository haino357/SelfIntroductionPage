# Re:system

自己紹介とお問い合わせ先、活動・発信先をまとめた日本語の1ページLPです。
Obsidianの `self-introduction-lp-design`（2026-10-24）を基に、既存のReact・TypeScript・Viteプロジェクトを改修しています。

公開URL: [https://haino357.github.io/re-system/](https://haino357.github.io/re-system/)

## ローカルで確認する

```bash
npm install
npm run dev
```

表示URLはターミナルの案内を参照してください。ベースパスは `/re-system/` です。

```bash
npm run build
npm run type-check
npm run preview
```

ビルド結果は `dist/` に出力されます。

## 原稿・連絡先の更新

[`src/data/profile.ts`](src/data/profile.ts) に屋号、肩書き、紹介文、メールアドレス、活動先リンクを集約しています。
屋号は上部・見出し・フッターで共有し、フッターの年は表示時点の年になります。
リンク一覧の順序は配列順です。URLのない項目は配列に含めないでください。
SNSは `socials` にまとめています。リンクとQRコードは同じ `url` を使うため、URLの変更時にQR画像を作り直す必要はありません。

ページ名と紹介文を変えた場合は、`index.html` のtitle・description・author・OGPも合わせて更新してください。
色と標準フォントは `src/styles/variables.css`、各部分のレイアウトは対応するCSS Modulesで調整できます。

## 構成と操作

- 小さな屋号 → プロフィール → メール → SNS → 活動・発信 → フッターの1カラム。
- メールボタンは `mailto:`。アドレスは選択・コピーできる通常のテキストです。
- SNSはX、Instagramの順で、プロフィールへのリンクとQRコードを表示します。幅480px以上は2列、狭い画面は1列です。
- QRコードは `qrcode.react` でページ内にSVGとして生成します。外部のQR生成サービスへの通信はありません。
- 活動先はGitHub、はてなブログ、Zenn、Qiita、noteの順で、SNSも含めて同じタブで開きます。
- 写真、フォーム、スキル・実績一覧、外部フォント・アイコンCDNは使用しません。
- 従来の未使用コンポーネント・画像は保持しています。LPの表示には組み込んでいません。

[実装用の設計メモと参照画像](docs/design.md) ／ [確認結果](docs/verification.md)

## 公開設定と原稿の確認

設計書第5節の肩書き・紹介文・メール・リンク候補を実装しています。
特に `tosho427.sysdiv@gmail.com` を仕事用の公開先として継続使用するか、本人による最終確認が必要です。
GitHub Pagesで公開し、`main` へのpushで既存のworkflowがビルド・デプロイします。
リポジトリ名は `re-system`、Viteのベースパスは `/re-system/` です。
`index.html` のcanonical・`og:url`も公開URLに合わせています。
旧公開URL `/SelfIntroductionPage/` は自動転送されないため、共有先やブックマークは新URLへ更新してください。

## アイコン

GitHub・X・Zenn・Qiita・noteは [Simple Icons](https://github.com/simple-icons/simple-icons) のSVGをローカルに保持しています（CC0、各商標は権利者に帰属）。
はてなブログの行は、このLP用の汎用ペンアイコンです。設計モックの画像を切り抜いたものではありません。
Instagramの行は、このLP用のカメラアイコンです。
