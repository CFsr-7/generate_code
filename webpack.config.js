
const path = require("path");

module.exports = {
    //代表webpack运行的模式，可选值有两个，development（开发模式）和production（发行模式,还可以对代码进行压缩）
    mode: 'production',
    entry:"./index.ts",
    output:{
        path:path.resolve('build'),
        filename:'Code.js',
        library: 'CodeUtils',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // 匹配 TypeScript 文件
                use: 'ts-loader', // 使用 ts-loader 处理 TypeScript
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        fallback: {
            "path":  [
                path.resolve(__dirname, 'node_modules'),
                require.resolve("path-browserify"),
            ], // 使用可能需要安装一下 npm i path-browserify，先重启看报错不报错，报错在安装
        },
    },
}
