const mysql =require('mysql')
const fs =require('fs')
function readFiles(){
    let bookImgs =fs.readdirSync('./public/img/')
   return bookImgs
}
let wgsUrl='http://localhost:5200/'
let str = 'INSERT INTO books SET ?'
var connection =mysql.createConnection({
    hose:'localhost',
    user:'root',
    password:'123456',
    database:'raybooks'
})
connection.connect()
function dataConnect(){
    let nameSuffix= readFiles()
    let reg = /(.*?)\./
    nameSuffix.forEach((item,index)=> {
        let obj ={
            bookName:'',
            bookImg:'',
            bookTxt:'',
            id:'',
            type:''
        }
        obj.bookName=reg.exec(item)[1]
        obj.bookImg=wgsUrl+'img/'+obj.bookName+'.jpg'
        obj.bookTxt=wgsUrl+'txt/'+obj.bookName+'.txt'
        obj.id=index+1
        obj.type=Math.random()*4
        connection.query(str,obj,function(err,req,res){
            console.log(err);
        })
    });
    console.log('--------------------');
    console.log('完成添加');
}
// dataConnect()
module.exports =connection
