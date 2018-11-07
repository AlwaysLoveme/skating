module.exports = {
    baseUrl: '/',
    devServer: {
        proxy: {
            "/api": {
                target: "http://www.xiandandan.xyz", // 域名
                ws: false, // 是否启用websockets
                changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": "/"
                }
            },
            "/base": {
                target: "http://111.231.50.109:8888", // 域名
                ws: false, // 是否启用websockets
                changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/base": "/"
                }
            },
        }
    },
    productionSourceMap: false, //不需要生产环境的 source map
}