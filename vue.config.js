const event = process.env.npm_lifecycle_event;
const currentPage =
  event.startsWith("serve:") || event.startsWith("build:")
    ? event.split(":")[1]
    : "";

const pageConfigs = {
  index: {
    entry: "src/index/main.ts",
    template: "public/index.html",
    filename: "index.html",
    title: "index",
    chunk: ["chunk-vendors", "chunk-common", "index"]
  },
  admin: {
    entry: "src/admin/main.ts",
    template: "public/index.html",
    filename: "index.html",
    title: "admin",
    chunk: ["chunk-vendors", "chunk-common", "admin"]
  }
};

const baseConfig = {
  publicPath: "/",
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false
    }
  },
  transpileDependencies: ["quasar"],
  devServer: {
    disableHostCheck: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://192.168.67.39:7987/",
        changeOrigin: true
      }
    }
  },
  pages: {
    index: pageConfigs[currentPage]
  },
  outputDir: "dist/" + currentPage
};

module.exports = baseConfig;
