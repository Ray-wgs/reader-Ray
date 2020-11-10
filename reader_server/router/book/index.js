const express=require('express')
const router = express.Router()
const connection =require('../../addData')
var data =''
// connection.connect()
let strId = "SELECT * FROM `books` where id="
let strAll="SELECT * FROM `books`"
let strType = "SELECT * FROM `books` where type="
let strName ="SELECT * FROM `books` where bookName="
//根据id查询数据
router.get('/byId',(req,res)=>{
    connection.query(strId+req.query.id,function(err,data){
      res.send(data)
      res.end()
    })
})
//根据type 查询数据
router.get('/byType',(req,res)=>{
    connection.query(strType+req.query.type,function(err,data){
      res.send(data)
      res.end()
    })
})
//查询所有数据
router.get('/all',(req,res)=>{
    connection.query(strAll,function(err,data){
      res.send(data)
      res.end()
    })
})
//根据名字查询数据
router.get('/byName',(req,res)=>{
    connection.query(strName+req.query.name,function(err,data){
      res.send(data)
      res.end()
    })
})
module.exports =router