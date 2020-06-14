const presets = ['@babel/preset-env', '@babel/preset-typescript'];
const plugins = ['@babel/plugin-proposal-class-properties'];

const ignore = ['dist', 'src/__tests__'];

module.exports = {
  presets,
  plugins,
  ignore,
};
