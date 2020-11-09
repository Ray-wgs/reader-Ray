//引入各种包
const express=require('express')
const bodyParser=require('body-parser')
const loginRouter=require('./router/login.js')
const booksRouter=require('./router/books')
//监听5200 端口 启动服务器
const app =express()
app.listen('5200',()=>{
    console.log('服务器启动中');
})
//post 请求的内容解析
app.use(bodyParser())
//跨域
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
//引入login的路由

app.use('/login',loginRouter)
app.use('/books',booksRouter)


