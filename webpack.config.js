const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出的文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  mode: 'development', // 也可以改成 'production'
};
