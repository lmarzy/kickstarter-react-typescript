const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: ['typings-for-css-modules-loader?modules&namedExport', 'sass-loader'],
        }),
      },
    ]
  },

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
};
