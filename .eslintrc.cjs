/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'vue'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/attribute-hyphenation': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'import/newline-after-import': 1,
    // 'import/order': [
    //   'warn',
    //   {
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true
    //     },
    //     'newline-between': 'always-and-inside-groups'
    //   }
    // ],
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/script-setup-uses-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
