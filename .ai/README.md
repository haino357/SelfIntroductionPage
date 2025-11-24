# AI設定ファイル ディレクトリ

このディレクトリには、各種AIツールの設定ファイルとプロジェクトドキュメントが含まれています。

## 📁 ファイル一覧

### プロジェクトコンテキスト
- **`context.md`** - プロジェクトの全体像、構成、開発ワークフロー
- **`prompts.md`** - よく使うAIプロンプトのテンプレート集（日本語）
- **`linting-guide.md`** - ESLint & Prettier の使い方ガイド（日本語）

### AIツール設定
プロジェクトルートの各ディレクトリに配置：
- **`/.cursorrules`** - Cursor AI用の設定
- **`/.github/copilot-instructions.md`** - GitHub Copilot用の設定
- **`/.claude/project-instructions.md`** - Claude AI用の設定
- **`/.claude/vscode-extension.md`** - Claude Code (VS Code拡張機能)用の設定
- **`/.openai/codex-instructions.md`** - OpenAI Codex用の設定
- **`/AI_INSTRUCTIONS.md`** - 全AIツール共通の基本ルール

## 🎯 各AIツールの使い方

### Cursor AI
Cursorエディタを開くと、自動的に`.cursorrules`を読み込みます。
追加の設定は不要です。

### GitHub Copilot
GitHub Copilotは`.github/copilot-instructions.md`を自動的に参照します。
VS CodeまたはCursorでCopilot拡張機能を有効にしてください。

### Claude (Anthropic)
Claude Desktop アプリまたはClaude.aiで使用する場合：

1. **新しい会話を開始**
2. **以下のファイルをアップロード**:
   - `/AI_INSTRUCTIONS.md` （必須）
   - `/.claude/project-instructions.md` （推奨）
   - `/.ai/context.md` （必要に応じて）

3. **プロンプト例**:
   ```
   このプロジェクトのReactコンポーネントを作成してください。
   アップロードしたAI_INSTRUCTIONS.mdのルールに従ってください。
   ```

### Claude Code (VS Code拡張機能)
VS CodeでClaude Code拡張機能を使用する場合：

1. **拡張機能をインストール**: VS Code Marketplaceから「Claude Code」をインストール
2. **自動適用**: `.claude/vscode-extension.md`が自動的に参照されます
3. **使い方**:
   - コード補完: 入力中に自動的に提案
   - リファクタリング: コードを選択して「Claude: Refactor」
   - エラー修正: エラー箇所で「Claude: Fix Error」
   - コード説明: コードを選択して「Claude: Explain Code」

### OpenAI Codex
Codex APIを使用する場合、システムプロンプトとして以下を設定：

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

## 📚 ドキュメント構成

```
プロジェクトルート/
├── AI_INSTRUCTIONS.md          # 全AIツール共通ルール（エントリーポイント）
├── .cursorrules                # Cursor AI専用
├── .github/
│   └── copilot-instructions.md # GitHub Copilot専用
├── .claude/
│   └── project-instructions.md # Claude AI専用
├── .openai/
│   └── codex-instructions.md   # OpenAI Codex専用
└── .ai/                        # このディレクトリ
    ├── README.md               # このファイル
    ├── context.md              # プロジェクトコンテキスト
    ├── prompts.md              # プロンプトテンプレート
    └── linting-guide.md        # Linting ガイド
```

## 🔄 使用フロー

### 初めてAIを使う場合
1. `/AI_INSTRUCTIONS.md` を読む（または AIに読ませる）
2. 使用するAIツールに応じた設定ファイルを確認
3. 必要に応じて `context.md` でプロジェクト詳細を確認

### 特定のタスクを実行する場合
1. `prompts.md` から適切なテンプレートを選択
2. テンプレートをカスタマイズして使用
3. AIが生成したコードを確認

### コード品質を確保する場合
1. `linting-guide.md` でLint/Format方法を確認
2. `npm run lint:fix` で自動修正
3. `npm run format` でフォーマット

## 💡 ベストプラクティス

### AIとの対話
- **具体的に**: 曖昧な指示ではなく、具体的な要件を伝える
- **コンテキストを提供**: 関連するファイルやコードを示す
- **段階的に**: 大きなタスクは小さく分割する

### コード生成後
- **必ず確認**: AIが生成したコードを理解する
- **Lintを実行**: `npm run lint:fix` で品質チェック
- **型チェック**: `npm run type-check` でTypeScriptエラー確認
- **テスト**: 動作確認を行う

### ファイル更新
- プロジェクト構成が変わったら `context.md` を更新
- 新しいパターンが確立したら各設定ファイルに追加
- よく使うプロンプトは `prompts.md` に追加

## 🛠️ トラブルシューティング

### AIが古いパターンを使う
→ 設定ファイルを明示的に参照させる
```
AI_INSTRUCTIONS.mdに従って、最新のパターンで実装してください
```

### 生成されたコードがLintエラーになる
→ 自動修正を試す
```bash
npm run lint:fix
npm run format
```

### TypeScriptエラーが出る
→ 型定義を確認
```bash
npm run type-check
```

## 📝 更新履歴

- **2024-11-24**: 初版作成
  - 全AIツール用の設定ファイル作成
  - プロジェクトドキュメント整備
  - ESLint/Prettier設定追加

## 🤝 貢献

新しいパターンやベストプラクティスを発見したら、該当する設定ファイルに追加してください。

## 📞 サポート

質問や問題がある場合は、各設定ファイルのコメントを参照するか、プロジェクトメンテナーに連絡してください。
