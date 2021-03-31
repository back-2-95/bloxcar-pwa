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
        devServer: {
            //headers: { "Access-Control-Allow-Origin": "*" },
            proxy: {
                '/api': {
                    changeOrigin: true,
                    target: 'https://bloxcar.fi/',
                    pathRewrite: {
                        '^/api': '/',
                    },
                    secure: false
                }
            }
        }
    }
}
