module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true // 支持vue3的编译宏
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    // 接入 prettier 规则
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  globals: {
    defineOptions: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: ['module', 'cjs'],
    parser: '@typescript-eslint/parser' // 使用自定义解析器，除了支持vue-eslint-parse解析器，支持其他自定义解析器。处理script部分的代码
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 开启 prettier 自动修复功能
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'off',
    // prevent <script setup> variables used in <template> to be marked as unused
    // This rule is not needed when using vue-eslint-parser v9.0.0 or later.。
    'vue/script-setup-uses-vars': 'error' // 这个规则可以告诉 ESLint 检测 `script setup` 中的变量在 template 中的使用
  }
};
