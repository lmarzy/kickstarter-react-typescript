import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = {
  src: './src',
  dest: 'dist',
};
const template = {
    title: 'React starter',
    filename: `${paths.src}/index.html`,
};

export default () => ({
    entry: `${paths.src}/index.tsx`,

    output: {
        path: resolve(__dirname, paths.dest),
        filename: 'bundle.js',
    },

    devtool: "source-map",

    devServer: {
        port: 8080,
        publicPath: '/',
        historyApiFallback: true,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            components: resolve(__dirname, 'src/components')
        }
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(ts|tsx)$/,
                loader: require.resolve('tslint-loader'),
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: template.title,
            template: template.filename
        })
    ],
});