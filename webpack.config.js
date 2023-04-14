const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")
require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.mjs$/,
                type: 'javascript/auto',
                exclude: /node_modules/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: { noEmit: false },
                        }
                    }],
                exclude: /node_modules/,
            },
            {
                exclude: /node_modules/,
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "../manifest.json" },
            ],
        }),
        ...getHtmlPlugins(["index"]),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".mjs", ".webpack.js", ".web.js", ".json"],
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        //contentBase: './'
    },
    devtool: 'cheap-module-source-map'
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HTMLPlugin({
                title: "Pom20 Chrome Extension",
                filename: `${chunk}.html`,
                chunks: [chunk],
                meta: [{
                    'http-equiv': 'content-security-policy',
                    content:/*
                        'upgrade-insecure-requests;' +*/
                        'script-src-elem \'self\' chrome-extension://blifafpihkfeiailealfbaebjpeinapa/js/index.js; ' +
                        'script-src \'self\' chrome-extension://blifafpihkfeiailealfbaebjpeinapa/js/index.js; '
                }]
        })
    );
}
