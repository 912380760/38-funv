const webpack = require('webpack');
const path = require('path');
const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
    // 禁止eslint
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        port: 8080,     // 端口号
        proxy: 'https://api.scms.sztv.com.cn', // 反向代理地址 api地址
    },
    publicPath: './',

    configureWebpack: {
        plugins: [
            // 配置jquery为$和jQuery通配符
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                mapState: ['vuex', 'mapState'],
                mapGetters: ['vuex', 'mapGetters'],
            }),
        ]
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname, './src/assets/const.less'),
            path.resolve(__dirname, './src/assets/mixins.less'),
        ]
      }
    }
};
