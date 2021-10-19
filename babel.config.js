module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      //"@babel/plugin-proposal-decorators",
      {
        legacy: true,
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './assets',
          '@src': './src',
          '@components': './src/components/',
          '@config': './src/config/',
          '@models': './src/models/',
          '@navigators': './src/navigators/',
          '@screens': './src/screens/',
          '@services': './src/services/',
          '@i18n': './src/i18n/',
          '@theme': './src/theme/',
          '@utils': './src/utils/',
        }
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
  ],
}
