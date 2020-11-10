const express=require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    console.log(req.query);
    if(req.query.username == 'ray' && req.query.password == '123456'){
        res.send('success')
    }else{
        res.send('err')
    }
    res.end()
})
module.exports = router