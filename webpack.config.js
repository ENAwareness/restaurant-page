const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "bundle.js", // 输出的文件名
    path: path.resolve(__dirname, "dist"), // 输出目录
    clean:true,
  },
  mode: "development", // 也可以改成 'production'
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    })
  ],
  devServer: {
    static: "./dist",
    port: 8080,
    open: true,
  },
};
