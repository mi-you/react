/*
  配置代理
    1. 可以在package.json 里添加 "proxy":"http://localhost:5000"。
        但是如果有两个服务器5000和50001就没办法了
    2. 新建src/setupProxy.js
        react脚手架会自动找到这个配置文件
        这里写commonJS语法
    以上两种其实都用了http-proxy-middleware，只是第一个是简写
    这个库是react脚手架下好的
*/ 
const proxy = require('http-proxy-middleware')

//  以前是写一个对象，现在写函数
module.exports = function(app){
  app.use(
    // 如果请求里有就/api1就转发给target代理
    proxy('/student',{
      target:'http://localhost:5000',
      /*
        默认false,要设成true 能让服务器彻底知道请求是从哪发出去的
        控制服务器收到的请求头中Host字段的值
        设置true 服务器端看到的Host:localhost:5000
        设置false 服务器端看到的Host:localhost:3000（react运行的地址）
      */ 
      changeOrigin:true,
      // 重写请求路径即把路径中的/api 替换成 '' 只会替换一个
      pathRewrite:{'^/student':''}
    }),
    proxy('/api2',{
      target:'http://localhost:5001',
      changeOrigin:true,
      pathRewrite:{'^/api2':''}
    })
  )
}