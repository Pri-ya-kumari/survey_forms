const route = require("express").Router()


route.get('/login',(req,res)=>{
    res.json("Login works");
})

route.post('/register',(req,res)=>{
    res.json("Resgister works")
})

module.exports= route 