const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 方法一
  // devServer:{
  //   proxy:"http://localhost:5000"
  // }
  
  // 方法二
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        // 接受数据时在端口号后面加api路经，表示从5000服务器获取数据。
        // pathRewrite确保请求5000时不带有api路经
        pathRewrite:{'^api':''}
        // ws: true,
        // changeOrigin: true
      },
    }
  }
})
