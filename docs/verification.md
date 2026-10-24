# LPの確認結果

確認日：2026-10-24。ローカル実装・本番ビルドの確認結果です。本番公開は実施していません。

## 通過した確認

- `npm run build`、`npm run type-check`。
- 変更したTS/TSXファイルのESLint（`ESLINT_USE_FLAT_CONFIG=false`）、変更ファイルのPrettier。
- 開発サーバーの `/SelfIntroductionPage/` がHTTP 200で応答。
- 本番ビルドを `vite preview` の同ベースパスで表示。CSS・JS・アイコンの読み込み、ブラウザコンソールにerror/warnがないことを確認。
- 360px・390px・768px・1440px幅で表示を確認。ドキュメントのスクロール幅が各ビューポート幅と一致し、横スクロールなし。
- 720px幅でも横スクロールなし（1440pxで200%拡大した場合と同じCSS幅でのリフロー確認）。実際のブラウザ200%ズームはプレビュー環境のショートカットが反映されず、未確認。
- 上部・h1・フッターの屋号、肩書き・紹介文、4つの活動先の順序、動的な表示年を確認。
- `lang="ja"`、main、h1が1つ、h1→h2の見出し順、フォームなし、装飾画像の空alt。
- メール→GitHub→X→はてなブログ→Zennの順でTab移動。各リンクに3pxの深緑フォーカス枠を確認。
- メールボタンは高さ60px、活動先は82px以上。アドレスは選択可能なテキストで、mailtoの宛先と一致。
- 外部リンクは同じタブ、ダミー・空リンクなし。4つのURLがいずれもHTTP 200で応答。ただし、これだけでアカウント所有者や掲載意図の最終確認を代替するものではありません。
- 通常文字の配色は4.5:1以上：本文15.32:1、補助文字5.34:1、メールボタン7.77:1、リンクhover時の補助文字4.99:1。
- `git diff --check`。依存定義・lockfile・workflow・Viteのベースパスに変更なし。

## 既存環境の問題

- `npm run lint` はESLint 9が要求するflat configがないため停止します。既存の `.eslintrc.cjs` を使う互換モードで検証しました。
- 全体Lintの互換モードには、今回変更していないButton・About・Portfolio・Skillsの19エラーと既存の型宣言等の警告が残っています。変更したアプリコードにはLintエラー・警告がありません。SVGのdefault export型宣言には既存CSS型宣言と同種のnamed-export警告が出ます。
- 既存のnode_modulesはx64向けの一部バイナリしか保持していなかったため、Apple Silicon向けRollup・esbuild・resolverを補いました。package.json・package-lock.jsonは変更していません。

## 公開前・公開後に残る確認

- 設計書第5節の候補原稿・メールアドレス・各アカウントが、本人の現在の公開意図に合うか。
- OSのメールアプリ起動・実際の宛先表示。本確認ではメール送信を行っていません。
- 実際のブラウザ200%ズームでの表示。
- 公開URL決定後のcanonical・og:url・必要に応じたOGP画像、本番URLでの実機スマートフォン表示・リンク操作。

## スクリーンショット

[PC・1440px](screenshots/desktop.png) ／ [スマートフォン・390px](screenshots/mobile.png)
