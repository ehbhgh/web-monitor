const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    context: process.cwd(),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "monitor.js"
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        setupMiddlewares: (middlewares, devServer) => {
            devServer.app.get("/success", function (req, res) {
                res.json({
                    id: 1,
                    name: "ws",
                    code: 200
                })
            })
            devServer.app.post("/fail", function (req, res) {
                res.sendStatus(500)
            })
            return middlewares
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "head"
        })
    ]
}