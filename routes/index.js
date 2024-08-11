var router = require("express").Router();


router.get("/home",(req,res)=>{
  return res.send("Hello from Home!");
})

module.exports = router;
