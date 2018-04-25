const path = require('path')
export default {
    publicPath:"",
    alias:{
        utils:path.resolve(__dirname,'src/utils/'),
        assets:path.resolve(__dirname,'src/assets/')
    },
    proxy: {
        "/api/v1/th": {
          "target": "http://xxx.com",
          "changeOrigin": true,
          "pathRewrite": { "^/api/v1/th": "" }
        },
      }
}
