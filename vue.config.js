const resolve = require("path").resolve;

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~shared": resolve(__dirname, "src/vendor/auth-frontend-shared")
      }
    }
  }
};
