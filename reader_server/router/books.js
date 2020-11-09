const express=require('express')
const readF=require('../readFile')
const router = express.Router()
const fs=require('fs')
router.get('/:id',(req,res)=>{
    let book=  fs.readFileSync(readF(req.params.id))
    console.log(book);
    res.send(book)
    res.end()
})
module.exports = router