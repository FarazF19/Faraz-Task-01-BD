var express = require('express');
var router = express.Router();


router.get('/create',(req,res)=>{
  return res.send("User created!")
})


router.get('/update',(req,res)=>{
  return res.send("User Updated!")
})

router.get('/delete',(req,res)=>{
  return res.send("User deleted!")
})

module.exports = router;
