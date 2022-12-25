const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // Add this line of code to disable lintOnSave
  lintOnSave: false,
});
