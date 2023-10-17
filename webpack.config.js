const cmdClr = require("./cmdClr")
const path = require("path")
const mode = process.env.NODE_ENV
console.log(`${cmdClr("[*]", "#7FFF7F")} mode: ${cmdClr(mode, "#7FFF7F")}`)

module.exports = {
	mode: mode,
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dst"),
		filename: "index.js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dst"),
		},
		client: {
			logging: "error",
		},
		compress: true,
		open: true,
	},
	stats: {
		colors: true,
		modules: false,
		reasons: false,
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(glsl|vs|fs|vert|frag)$/,
				exclude: /node_modules/,
				use: ["raw-loader", "glslify-loader"],
			},
			{
				test: /\.html$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
				},
			},
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					emitFile: true,
					outputPath: "asset/media",
					publicPath: "asset/media",
				},
			},
		],
	},
}
