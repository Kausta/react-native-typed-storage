module.exports = {
  extends: [
    '@react-native-community/eslint-config',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'react-native',
    'prettier',
  ],
  env: {
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': "off",
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        printWidth: 120,
        useTabs: false,
        semi: true,
        trailingComma: 'all',
      },
    ],
  },
}