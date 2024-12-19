const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const { query } = require("express");

module.exports={
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer:{
        static: './dist', 
        hot:true
    },
    resolve:{
        alias:{
            "~":__dirname
        }
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/template.html"],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module:{
        rules: [
            {
                test:/\.(numbers|xls|xlsx|xlsb)$/,
                use:[{loader: './sheetjs-loader'}]
            },
            {
                test:/\.(txt|csv|mmdb)$/,
                use:[
                    {
                        loader: 'csv-loader',
                        options:{
                            name:"[path][name].[ext]",
                            emitFile:true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader:"html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    
};