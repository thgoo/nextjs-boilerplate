module.exports = {
  root: false,
  env: {
    browser: true, es2020: true
  },
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['@stylistic'],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'client/src/pages'],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-wrap-multilines': ['error',
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/max-len': ['error', { code: 120 }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'always']
  },
}
