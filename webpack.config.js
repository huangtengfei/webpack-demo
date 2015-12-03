var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {

	//默认找项目文件夹下的 index.js
	entry: APP_PATH,

	//所有文件合并为 bundle.js 输出
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'hello world'
		})
	]
}