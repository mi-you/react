const express = require('express')

const app = express()

app.use((res,req,next) => {
  console.log('有人请求服务器2了')
  console.log('请求来自于：',res.get('Host'))
  console.log('请求地址：',res.url)
  next()
})

app.get('/student',(res,req) => {
  const student = [
    {
      name:'米又',
      age:18
    }
  ]
  req.send(student)
})

app.listen(5001,err => {
  if(!err) console.log('服务器2监听在http://localhost:5001')
})
