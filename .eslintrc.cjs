module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier', // Must be last to override other configs
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'react-refresh',
        'jsx-a11y',
        'import',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    rules: {
        // React Rules
        'react/prop-types': 'off', // TypeScript handles this
        'react/react-in-jsx-scope': 'off', // Not needed in React 18+
        'react/jsx-uses-react': 'off', // Not needed in React 18+
        'react/self-closing-comp': 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-unstable-nested-components': 'error',

        // React Hooks Rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // React Refresh
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        // TypeScript Rules
        '@typescript-eslint/no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
        }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
        }],
        '@typescript-eslint/no-misused-promises': ['error', {
            checksVoidReturn: false,
        }],

        // Import Rules
        'import/order': ['error', {
            groups: [
                'builtin',
                'external',
                'internal',
                ['parent', 'sibling'],
                'index',
                'object',
                'type',
            ],
            'newlines-between': 'always',
            alphabetize: {
                order: 'asc',
                caseInsensitive: true,
            },
        }],
        'import/no-duplicates': 'error',
        'import/no-default-export': 'warn',

        // Accessibility Rules
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['to'],
        }],
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',

        // General Rules
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'warn',
        'prefer-const': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-template': 'error',
        'prefer-arrow-callback': 'error',
        'no-nested-ternary': 'warn',
        'eqeqeq': ['error', 'always'],
    },
    overrides: [
        {
            // Config files can use default exports
            files: ['*.config.ts', '*.config.js', '*.config.cjs'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
};
