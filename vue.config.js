const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // Add this line of code to disable lintOnSave
  lintOnSave: false,
});
