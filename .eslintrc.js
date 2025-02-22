module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended', // Adicione esta linha
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
