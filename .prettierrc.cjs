module.exports = {
    // Line width
    printWidth: 100,

    // Indentation
    tabWidth: 2,
    useTabs: false,

    // Semicolons
    semi: true,

    // Quotes
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,

    // Trailing commas
    trailingComma: 'es5',

    // Brackets
    bracketSpacing: true,
    bracketSameLine: false,

    // Arrow functions
    arrowParens: 'always',

    // Line endings
    endOfLine: 'lf',

    // HTML whitespace
    htmlWhitespaceSensitivity: 'css',

    // Prose wrap
    proseWrap: 'preserve',

    // Embedded language formatting
    embeddedLanguageFormatting: 'auto',

    // File-specific overrides
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 80,
            },
        },
        {
            files: '*.md',
            options: {
                proseWrap: 'always',
                printWidth: 80,
            },
        },
    ],
};
