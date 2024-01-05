const express = require("express");
//const users = require("./nodebackend/userslist.json");
//const fs = require("fs");
const app = express();
//const mongoose = require('mongoose')
const PORT = 8000;
const admin = require('./nodebackend/adminlogindb')

app.use(express.urlencoded({extended:false}));


app 
    .route("/admin/:email")
    .get(async(req, res) => {
        //const email = string(req.params.email);
        //const admin = await admin.findById(req.params.email)
        //const user = admin.find((admin) => admin.email === email)
        //const admins = await admin.findByEmail(req.params.email);
        
        //getting the admin login by emailid
        const email = req.body.email;
        const getemail = await admin.findOne({email:email})
        res.send(getemail);
        console.log(getemail)
    })
    .put((req,res)=>{
        return res.json("pending for now")
    })
    .delete((req,res)=>{
        return res.json("pending for now")
    })


app.post('/admin', async(req, res) => {
    const body = req.body;
    //sending data to db mongose
    const result = await admin.create({
        name:body.name,
        email:body.email,
        password:body.password 
    });
    console.log(result)
    return res.json(result)
})
//to get all admin details data
app.get('/admin', async(req, res) => {
    const results = await admin.find({
    })
    console.log(results)
    return res.json(results)
})

app.listen(PORT, () => {
    console.log("node server se connected", PORT);
})