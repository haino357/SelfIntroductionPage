# ESLint & Prettier 設定ガイド

## 概要
このプロジェクトには、コード品質と一貫性を保つためのESLintとPrettierが設定されています。

## インストール済みパッケージ

### ESLint関連
- `@typescript-eslint/parser` - TypeScriptパーサー
- `@typescript-eslint/eslint-plugin` - TypeScript用ルール
- `eslint-plugin-react` - React用ルール
- `eslint-plugin-react-hooks` - React Hooks用ルール
- `eslint-plugin-jsx-a11y` - アクセシビリティチェック
- `eslint-plugin-import` - import文の整理
- `eslint-config-prettier` - PrettierとESLintの競合を解消

### Prettier関連
- `prettier` - コードフォーマッター
- `eslint-import-resolver-typescript` - TypeScriptのimport解決

## 利用可能なコマンド

### Lint（コードチェック）
```bash
# コードをチェック
npm run lint

# 自動修正可能な問題を修正
npm run lint:fix
```

### Format（フォーマット）
```bash
# コードをフォーマット
npm run format

# フォーマットが必要かチェックのみ
npm run format:check
```

### 型チェック
```bash
# TypeScriptの型エラーをチェック
npm run type-check
```

## 設定ファイル

### `.eslintrc.cjs`
ESLintの設定ファイル。以下のルールを含みます：
- TypeScript厳格チェック
- React/React Hooksのベストプラクティス
- アクセシビリティチェック
- import文の自動整理
- コーディング規約の強制

### `.prettierrc.cjs`
Prettierの設定ファイル。以下を定義：
- インデント: 2スペース
- セミコロン: あり
- シングルクォート: あり
- 行幅: 100文字
- トレイリングカンマ: ES5準拠

### `.eslintignore` / `.prettierignore`
チェック対象外のファイル/ディレクトリを指定

## エディタ統合

### VS Code
`.vscode/settings.json`を作成すると、保存時に自動フォーマット・自動修正が有効になります：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  }
}
```

必要な拡張機能：
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Cursor
Cursorでも同様の設定が使用できます。`.cursorrules`ファイルがAIアシスタントに対してルールを提供します。

## 主要なルール

### TypeScript
- `any`型の使用禁止
- 明示的な型定義を推奨
- Nullish coalescing (`??`) の使用を推奨
- Optional chaining (`?.`) の使用を推奨

### React
- 関数コンポーネントのみ使用
- 名前付きエクスポートを推奨
- Hooks のルールを厳格にチェック
- 配列のindexをkeyに使用しない

### アクセシビリティ
- セマンティックHTML要素の使用
- ARIA属性の適切な使用
- キーボードナビゲーション対応

### Import
- import文の自動整理
- グループ化とアルファベット順ソート
- 重複importの検出

## トラブルシューティング

### ESLintエラーが多すぎる場合
```bash
# 自動修正を試す
npm run lint:fix

# それでも残る場合は手動で修正
npm run lint
```

### Prettierとの競合
`eslint-config-prettier`が設定されているため、通常は競合しません。
もし問題がある場合は、`.eslintrc.cjs`の`extends`配列で`prettier`が最後にあることを確認してください。

### 型エラー
```bash
# 型チェックを実行
npm run type-check

# エラー箇所を確認して修正
```

## CI/CDでの使用

GitHub Actionsなどで以下のコマンドを実行することを推奨：

```yaml
- name: Lint
  run: npm run lint

- name: Format Check
  run: npm run format:check

- name: Type Check
  run: npm run type-check
```

## カスタマイズ

プロジェクトの要件に応じて、以下のファイルを編集してルールをカスタマイズできます：
- `.eslintrc.cjs` - ESLintルール
- `.prettierrc.cjs` - Prettierフォーマット設定
- `.cursorrules` - AIアシスタント向けガイドライン
