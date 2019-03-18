function getBabelConfig() {
  return {
    presets: [
      [require.resolve('@babel/preset-env'), { modules: false }],
    ],
    plugins: [],
  };
}

module.exports = getBabelConfig;


