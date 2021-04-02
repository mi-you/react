const express = require('express')

const app = express()

app.use((res,req,next) => {
  console.log('有人请求服务器1了')
  console.log('请求来自于：',res.get('Host'))
  console.log('请求地址：',res.url)
  next()
})

app.get('/student',(res,req) => {
  const student = [
    {
      name:'miyou',
      age:18
    }
  ]
  req.send(student)
})

app.listen(5000,err => {
  if(!err) console.log('服务器1监听在http://localhost:5000')
})
