const path = require("path");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'BloxCar PWA'
                return args
            })
    },
    configureWebpack: {
        plugins: [
            new ServiceWorkerWebpackPlugin({
                entry: path.join(__dirname, "./src/service-worker.js")
            })
        ]
    }
}
