const path = require('path')
export default {
  plugins: [
    ["umi-plugin-react",{
      antd:true,
      dva:true,
      polyfills: ['ie9'],
      routes: {
        update(routes) {
          return [...require("./src/pages/_routes"), ...routes];
        }
      },
      dll: {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"]
      }
    }]
  ],
  // pages: {
  //   "/": {
  //     Route: "./src/components/Authorized/AuthorizedRoute.js",
  //     ignore: "/User"
  //   }
  // },
  history: 'hash',
  publicPath:"",
    alias:{
        utils:path.resolve(__dirname,'src/utils/'),
        assets:path.resolve(__dirname,'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        common: path.resolve(__dirname, 'src/common/'),
        services: path.resolve(__dirname, 'src/services/'),
    },
    proxy: {
        "/api/v1/th": {
          "target": "http://xxx.com",
          "changeOrigin": true,
          "pathRewrite": { "^/api/v1/th": "" }
        },
      },
      theme: './src/theme.js',
      extraBabelPlugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
      ],
};
