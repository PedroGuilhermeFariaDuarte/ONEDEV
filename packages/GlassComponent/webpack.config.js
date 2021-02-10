const path = require("path")

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "components", "InputGlass", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                use: 'babel-loader',
                exclude: '/(node_modules)/'
            },
            {
                test: /\.png?/,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx',],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'src', 'InputGlass'),
        libraryTarget: 'commonjs2'
    }
}
