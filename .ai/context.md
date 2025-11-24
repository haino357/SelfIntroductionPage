# プロジェクトコンテキスト

## プロジェクト概要
個人ポートフォール/自己紹介サイト。フリーランスとしてのスキルや経験を紹介するためのWebサイト。

## 技術スタック
- **言語**: TypeScript
- **フレームワーク**: React 18+
- **ビルドツール**: Vite
- **スタイリング**: CSS Modules
- **デプロイ**: GitHub Pages

## プロジェクト構成

```
SelfIntroductionPage/
├── public/              # 静的ファイル
│   └── .nojekyll       # GitHub Pages用
├── src/
│   ├── components/     # Reactコンポーネント
│   │   └── sections/   # セクションコンポーネント
│   ├── hooks/          # カスタムフック
│   ├── utils/          # ユーティリティ関数
│   ├── types/          # TypeScript型定義
│   ├── assets/         # 画像、フォントなど
│   ├── App.tsx         # メインアプリケーション
│   ├── main.tsx        # エントリーポイント
│   └── index.css       # グローバルスタイル
├── .cursorrules        # AI設定ルール
├── vite.config.ts      # Vite設定
├── tsconfig.json       # TypeScript設定
└── package.json        # 依存関係
```

## 主要な機能
- レスポンシブデザイン（モバイルファースト）
- スムーズなスクロールアニメーション
- セクションごとの情報表示（プロフィール、スキル、経験、リンクなど）
- ダークモード対応（予定）
- アクセシビリティ対応

## 開発ワークフロー

### 開発サーバーの起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

### デプロイ
```bash
npm run deploy
```

## 重要な設定

### Vite設定 (vite.config.ts)
- GitHub Pages用のベースパス設定: `/SelfIntroductionPage`
- ビルド出力先: `dist/`

### TypeScript設定
- 厳格モード有効
- JSX: React
- モジュール解決: bundler

## コーディング規約

### コンポーネント設計
- 単一責任の原則に従う
- 再利用可能なコンポーネントを作成
- Propsは明示的に型定義
- デフォルトエクスポートではなく名前付きエクスポート

### スタイリング
- CSS Modulesを使用
- CSS変数でテーマカラーを管理
- BEM命名規則は使用しない（CSS Modulesのため）

### 状態管理
- ローカル状態: useState
- 副作用: useEffect
- パフォーマンス最適化: useMemo, useCallback
- グローバル状態管理は現在不要（必要に応じてContext APIを検討）

## よくある課題と解決策

### GitHub Pagesでのルーティング
- SPAのため、404エラーが発生する可能性
- `.nojekyll`ファイルで対応
- ベースパスを正しく設定

### パフォーマンス
- 画像の最適化（WebP形式、遅延読み込み）
- コンポーネントの遅延読み込み
- 不要な再レンダリングの防止

### アクセシビリティ
- セマンティックHTML要素の使用
- 適切なARIAラベル
- キーボードナビゲーション対応
- 十分な色のコントラスト

## 今後の拡張予定
- [ ] ダークモード実装
- [ ] 多言語対応（日本語/英語）
- [ ] ブログセクション追加
- [ ] お問い合わせフォーム
- [ ] アニメーション強化
- [ ] SEO最適化

## 参考リソース
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)
