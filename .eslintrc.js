module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/global': true
  },
  extends: [
    'standard',
    'plugin:cypress/recommended'
  ],
  plugins: [
    'cypress',
    'jest'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
