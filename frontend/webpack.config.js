var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let env = process.env.ENV || 'develop';

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	devtool: 'cheap-module-eval-source-map',

	output: {
		path: env.toLowerCase() === 'production' ? '../public/build' : '/build',
		publicPath: 'http://localhost:8880/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},

	module: {
		rules: [{
				test: /\.ts$/,
				loaders: [{
					loader: 'awesome-typescript-loader'
				}, 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				loader: 'raw-loader'
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
};
