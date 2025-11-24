# AI設定ファイル 完全ガイド

> **SelfIntroductionPage プロジェクト用のAI開発支援設定**

## 📋 目次

1. [概要](#概要)
2. [作成したファイル一覧](#作成したファイル一覧)
3. [各AIツールの設定詳細](#各aiツールの設定詳細)
4. [共通ルール](#共通ルール)
5. [コード品質管理](#コード品質管理)
6. [使い方](#使い方)
7. [トラブルシューティング](#トラブルシューティング)

---

## 概要

このプロジェクトでは、複数のAIコーディングアシスタントが一貫した高品質なコードを生成できるよう、包括的な設定ファイルを整備しました。

### 🎯 目的

- **一貫性**: どのAIツールを使っても同じコーディングスタイル
- **品質**: TypeScript厳格モード、アクセシビリティ、パフォーマンス最適化
- **効率**: 自動フォーマット、自動Lint、型チェック
- **保守性**: 明確なパターンとアンチパターンの定義

### 🛠️ 対応AIツール

| AIツール | 自動適用 | 設定ファイル |
|---------|---------|------------|
| Cursor AI | ✅ | `.cursorrules` |
| GitHub Copilot | ✅ | `.github/copilot-instructions.md` |
| Claude (Desktop/Web) | ❌ 手動 | `.claude/project-instructions.md` |
| Claude Code (VS Code) | ✅ | `.claude/vscode-extension.md` |
| OpenAI Codex | ❌ 手動 | `.openai/codex-instructions.md` |

---

## 作成したファイル一覧

### 📁 プロジェクト構成

```
SelfIntroductionPage/
│
├── AI_INSTRUCTIONS.md                    # 全AIツール共通ルール（エントリーポイント）
│
├── .cursorrules                          # Cursor AI専用設定
│
├── .github/
│   └── copilot-instructions.md           # GitHub Copilot専用設定
│
├── .claude/
│   ├── project-instructions.md           # Claude AI（一般）設定
│   └── vscode-extension.md               # Claude Code（VS Code拡張）設定
│
├── .openai/
│   └── codex-instructions.md             # OpenAI Codex設定
│
├── .ai/
│   ├── README.md                         # AI設定の使い方ガイド
│   ├── context.md                        # プロジェクトコンテキスト
│   ├── prompts.md                        # プロンプトテンプレート集
│   └── linting-guide.md                  # ESLint & Prettier ガイド
│
├── .eslintrc.cjs                         # ESLint設定
├── .eslintignore                         # ESLint除外設定
├── .prettierrc.cjs                       # Prettier設定
└── .prettierignore                       # Prettier除外設定
```

### 📊 ファイル数と行数

- **設定ファイル**: 14ファイル
- **総行数**: 約6,000行以上
- **言語**: Markdown, JavaScript (CommonJS)

---

## 各AIツールの設定詳細

### 1. Cursor AI (`.cursorrules`)

**特徴**: 最も詳細な設定ファイル

**内容**:
- TypeScript厳格ルール（`any`型禁止、明示的型定義必須）
- React コンポーネント構造パターン
- Hooks の正しい使い方（依存配列、cleanup関数）
- 状態管理ガイドライン（useState、useReducer）
- パフォーマンス最適化（React.memo、useMemo、useCallback）
- アクセシビリティ要件（セマンティックHTML、ARIA）
- アンチパターン集（具体例付き）
- CSS Modules スタイリング規則

**適用方法**: Cursorエディタで自動適用

**主要ルール**:
```typescript
// ✅ 推奨パターン
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return <button onClick={onClick} className={styles[variant]}>{label}</button>;
};

// ❌ 禁止パターン
export default function Button(props: any) { ... }
```

---

### 2. GitHub Copilot (`.github/copilot-instructions.md`)

**特徴**: コード生成時のテンプレートとパターン重視

**内容**:
- コンポーネント・フック・CSS のテンプレート
- import文の順序規則
- ファイル命名規則
- 推奨パターンと禁止パターン
- 出力フォーマット指定

**適用方法**: GitHub Copilotが自動参照

**テンプレート例**:
```typescript
// コンポーネントテンプレート
import React, { useState, useCallback } from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  title: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({ title }) => {
  const [value, setValue] = useState<number>(0);
  
  const handleClick = useCallback(() => {
    setValue(prev => prev + 1);
  }, []);
  
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
};
```

---

### 3. Claude AI (`.claude/project-instructions.md`)

**特徴**: 対話型の説明とコミュニケーション重視

**内容**:
- プロジェクトコンテキストと役割定義
- コード生成ガイドライン
- デバッグアプローチ
- コミュニケーションスタイル
- エラーハンドリングパターン
- ドキュメント標準

**適用方法**: Claude Desktop/Webで手動アップロード

**使用例**:
1. Claude.aiで新しい会話を開始
2. `.claude/project-instructions.md` をアップロード
3. プロンプト: 「このプロジェクトのルールに従ってReactコンポーネントを作成してください」

---

### 4. Claude Code (`.claude/vscode-extension.md`)

**特徴**: VS Code統合に特化

**内容**:
- インライン補完パターン
- リファクタリングガイドライン
- エラー修正アプローチ
- コードレビューチェックリスト
- VS Code固有の機能説明

**適用方法**: VS CodeのClaude Code拡張機能で自動適用

**主な機能**:
- コード補完: 入力中に自動提案
- リファクタリング: コード選択 → 「Claude: Refactor」
- エラー修正: 「Claude: Fix Error」
- コード説明: 「Claude: Explain Code」

---

### 5. OpenAI Codex (`.openai/codex-instructions.md`)

**特徴**: システムプロンプト形式

**内容**:
- 必須パターンとテンプレート
- 禁止パターンの明示
- 品質チェックリスト
- 出力フォーマット仕様
- API統合用の構造化指示

**適用方法**: APIのシステムプロンプトとして設定

**使用例**:
```python
system_prompt = open('.openai/codex-instructions.md').read()

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": "Create a React component..."}
    ]
)
```

---

## 共通ルール

### ✅ 必須事項（Must Do）

#### TypeScript
- ✅ 明示的な型定義を使用
- ✅ `any`型を避け、`unknown`を使用
- ✅ すべての関数に戻り値の型を指定
- ✅ interfaceを優先（typeより）

#### React
- ✅ 関数コンポーネントのみ使用
- ✅ 名前付きエクスポート（default exportは禁止）
- ✅ Props interfaceをコンポーネント前に定義
- ✅ Hooksの依存配列を正確に指定
- ✅ useEffectにcleanup関数を追加

#### スタイリング
- ✅ CSS Modulesを使用
- ✅ モバイルファーストのレスポンシブデザイン
- ✅ CSS変数（カスタムプロパティ）でテーマ管理
- ✅ セマンティックなクラス名

#### アクセシビリティ
- ✅ セマンティックHTML要素（`<nav>`, `<main>`, `<section>`）
- ✅ 画像にalt属性
- ✅ インタラクティブ要素にARIAラベル
- ✅ 適切な見出し階層（h1 → h2 → h3）

### ❌ 禁止事項（Must Not Do）

#### TypeScript
- ❌ `any`型の使用
- ❌ 型定義の省略

#### React
- ❌ クラスコンポーネント
- ❌ default export
- ❌ 状態の直接変更（mutation）
- ❌ 配列のindexをkeyに使用
- ❌ コンポーネント内でのコンポーネント定義
- ❌ 依存配列の省略・不正確な指定

#### スタイリング
- ❌ インラインスタイル
- ❌ `!important`の使用

---

## コード品質管理

### ESLint設定 (`.eslintrc.cjs`)

**主要ルール**:
- TypeScript厳格チェック
- React/React Hooksのベストプラクティス
- アクセシビリティチェック（jsx-a11y）
- import文の自動整理
- 未使用変数の検出

**インストール済みパッケージ**:
```json
{
  "@typescript-eslint/parser": "最新版",
  "@typescript-eslint/eslint-plugin": "最新版",
  "eslint-plugin-react": "最新版",
  "eslint-plugin-react-hooks": "最新版",
  "eslint-plugin-jsx-a11y": "最新版",
  "eslint-plugin-import": "最新版",
  "eslint-config-prettier": "最新版"
}
```

### Prettier設定 (`.prettierrc.cjs`)

**フォーマット規則**:
- インデント: 2スペース
- セミコロン: あり
- クォート: シングルクォート
- 行幅: 100文字
- トレイリングカンマ: ES5準拠
- 改行コード: LF

### 利用可能なコマンド

```bash
# 型チェック
npm run type-check

# Lint（チェックのみ）
npm run lint

# Lint（自動修正）
npm run lint:fix

# フォーマット
npm run format

# フォーマットチェック
npm run format:check

# 開発サーバー
npm run dev

# ビルド
npm run build
```

---

## 使い方

### 🚀 初回セットアップ

1. **依存関係のインストール**
   ```bash
   npm install
   ```

2. **使用するAIツールの確認**
   - Cursor AI → 自動適用（設定不要）
   - GitHub Copilot → 自動適用（設定不要）
   - Claude Desktop → `.claude/project-instructions.md`をアップロード
   - Claude Code → VS Code拡張機能をインストール
   - OpenAI Codex → APIのシステムプロンプトに設定

### 📝 日常的な使用

#### Cursor AIの場合
1. Cursorエディタでプロジェクトを開く
2. コードを書き始める
3. AIが自動的に`.cursorrules`を参照して提案

#### GitHub Copilotの場合
1. VS CodeでCopilot拡張機能を有効化
2. コードを書き始める
3. Copilotが自動的に提案

#### Claude (Desktop/Web)の場合
1. 新しい会話を開始
2. `AI_INSTRUCTIONS.md`または`.claude/project-instructions.md`をアップロード
3. プロンプト例:
   ```
   このプロジェクトのルールに従って、
   ユーザープロフィールを表示するReactコンポーネントを作成してください。
   ```

#### Claude Code (VS Code)の場合
1. VS CodeでClaude Code拡張機能をインストール
2. コードを選択して右クリック
3. 「Claude: Refactor」「Claude: Fix Error」などを選択

### 🔍 コード品質チェック

コードを書いた後、必ず以下を実行：

```bash
# 1. 型チェック
npm run type-check

# 2. Lint + 自動修正
npm run lint:fix

# 3. フォーマット
npm run format
```

---

## トラブルシューティング

### ❓ AIが古いパターンを使う

**解決策**:
- 設定ファイルを明示的に参照させる
- プロンプトに「AI_INSTRUCTIONS.mdのルールに従って」と追記

### ❓ 生成されたコードがLintエラーになる

**解決策**:
```bash
# 自動修正を試す
npm run lint:fix
npm run format

# それでも残る場合は手動で修正
npm run lint
```

### ❓ TypeScriptエラーが出る

**解決策**:
```bash
# 型チェックを実行
npm run type-check

# エラー箇所を確認して修正
# 主な原因:
# - any型の使用
# - 型定義の不足
# - null/undefinedのチェック不足
```

### ❓ Claude Desktopで設定が反映されない

**解決策**:
- 毎回の会話で設定ファイルを再アップロード
- または、プロンプトに直接ルールを記載

### ❓ VS Code拡張機能が動作しない

**解決策**:
1. 拡張機能が最新版か確認
2. VS Codeを再起動
3. APIキーが正しく設定されているか確認

---

## 📊 効果と利点

### 開発効率の向上
- ✅ コーディング時間の短縮（AIによる補完）
- ✅ バグの早期発見（Lint、型チェック）
- ✅ コードレビュー時間の削減（一貫したスタイル）

### コード品質の向上
- ✅ 型安全性の保証
- ✅ アクセシビリティの自動チェック
- ✅ パフォーマンスの最適化
- ✅ 保守性の向上

### チーム開発への対応
- ✅ 一貫したコーディングスタイル
- ✅ 新メンバーのオンボーディング容易化
- ✅ ドキュメント化されたベストプラクティス

---

## 🔄 今後の拡張

### 追加予定の機能
- [ ] CI/CDでの自動Lint・型チェック
- [ ] pre-commitフックの追加
- [ ] テストカバレッジの設定
- [ ] Storybookの導入

### 設定の更新
- プロジェクトの成長に合わせて設定を更新
- 新しいベストプラクティスの追加
- AIツールの新機能への対応

---

## 📚 参考資料

### 公式ドキュメント
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [ESLint公式ドキュメント](https://eslint.org/)
- [Prettier公式ドキュメント](https://prettier.io/)

### AIツール
- [Cursor公式サイト](https://cursor.sh/)
- [GitHub Copilot](https://github.com/features/copilot)
- [Claude AI](https://www.anthropic.com/claude)
- [OpenAI](https://openai.com/)

---

## 📞 サポート

質問や問題がある場合:
1. `.ai/README.md` を確認
2. 各設定ファイルのコメントを参照
3. プロジェクトメンテナーに連絡

---

**作成日**: 2024-11-24  
**バージョン**: 1.0.0  
**プロジェクト**: SelfIntroductionPage
