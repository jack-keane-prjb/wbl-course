//REC: Вот так устанавиливал поддержку tsx:
// @typescript-eslint/eslint-plugin@latest
// eslint-plugin-react@latest
// // вот тут вылезли предупреждения касательно этого: eslint-plugin-jest@27.2.1. Но, вроде, без ошибок.
// @typescript-eslint/parser@latest

// UPD: пока что удалил вот это: eslint-plugin-jest@27.2.1. Но зато вернул функционал stylelint-group selector + stylelint-prettier.
// Но их надо ставить в конкретный пакет. Глобально почему-то не срабатывает.

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'unused-imports',
    'prettier',
  ],
  rules: {
    // REC: получилось подружить eslint и prettier. Нужно только отключить все правила форматирования в eslint:
    // REMOVE indent: ['error', 4],
    // REMOVE 'linebreak-style': ['error', 'unix'],
    // REMOVE quotes: ['error', 'single'],
    // REMOVE semi: ['error', 'always'],
    'prettier/prettier': 'error',
    // for deleting unused imports
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
