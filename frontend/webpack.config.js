var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

let env = process.env.NODE_ENV || 'develop';

console.log('enviroment is', env);

let config = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	devtool: 'source-map',

	output: {
		path: `${__dirname}/../public`,
		publicPath: 'http://localhost:8889/',
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

		new CopyWebpackPlugin([
			{ from: 'src/localization', to: 'localization' }
		])
	],

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
};

if (env === 'develop') {
	config.plugins.push(new HtmlWebpackPlugin({
		template: 'src/index.html'
	}));
}


module.exports = config;