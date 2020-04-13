const baseConfig = {
  publicPath: "/",
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },
  transpileDependencies: ["quasar"]
};

module.exports = baseConfig;
