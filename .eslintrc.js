module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/global': true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'cypress'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
