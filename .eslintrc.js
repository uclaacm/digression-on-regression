module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ["react"],
  "settings": {
      "react": {
        "version": "detect"
      }
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
  },
};
