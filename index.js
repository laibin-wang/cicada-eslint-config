module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint-config-standard',
    'plugin:@typescript-eslint/eslint-recommended'
  ],

  plugins: ['@typescript-eslint'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    extraFileExtensions: ['.vue']
  },

  rules: {
    'no-new': 'error',
    'no-bitwise': 'error',
    'func-names': ['error', 'always'],
    'no-console': ['error', { 'allow': [ 'warn', 'error' ] }],
    'no-plusplus': 'off',
    'default-case': 'error',
    'prefer-template': 'error',
    'consistent-return': 'error',
    'no-nested-ternary': 'error',
    'no-restricted-exports': 'off',
    "no-restricted-syntax": 'off',
    'eol-last': ['error', 'always'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'prefer-destructuring': ['error', { object: true, array: false }],
    // eslint-plugin-import
    // eslint-plugin-vue
    'vue/no-v-html': 'error',
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': true
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 1,
      alignAttributesVertically: false,
      ignores: []
    }],
    'vue/no-unused-components': ['error', {
      'ignoreWhenBindingPresent': true
    }],
    'vue/require-default-prop': 'error',
    'vue/require-v-for-key': 'error',
    'vue/return-in-computed-property': ['error', {
      'treatUndefinedAsUnspecified': true
    }],
    // typescript-eslint
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },

  overrides: [
    {
      files: ['*.vue'],
      parser: require.resolve('vue-eslint-parser')
    }
  ]
}
