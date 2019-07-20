const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "~shared": path.resolve(__dirname, "src/vendor/auth-frontend-shared")
      }
    }
  }
};
