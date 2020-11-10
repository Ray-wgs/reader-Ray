const fs =require('fs')
function readF(params) {
    let data =fs.readdirSync('./public/txt/')
    return './public/txt/'+data[params]
}
module.exports=readF

