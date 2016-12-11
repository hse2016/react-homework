module.exports = {
    entry: {
        javascript: "./src/js/app.js",
        html: "./prod/index.html",
    },

    output: {
        filename: "app.js",
        path: "./prod",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    }
};