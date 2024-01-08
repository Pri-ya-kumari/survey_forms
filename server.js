const express = require("express");
//const users = require("./nodebackend/userslist.json");
//const fs = require("fs");
const app = express();
//const mongoose = require('mongoose')
const PORT = 8000;
const admin = require('./nodebackend/adminlogindb')
const surveyuser = require('./nodebackend/surveyusers')
const surveycreators = require('./nodebackend/surveycreators')
const misusers = require('./nodebackend/misusers')
const signup = require('./nodebackend/signupusers')

app.use(express.urlencoded({extended:false}));

//creating it for signup form 

app.post('/signuserall', async(req, res) => {
    const body = req.body;
    //sending data to db mongose
    const result = await signup.create({
        name:body.name,
        email:body.email,
        password:body.password ,
        roles:body.roles, 
    });
    console.log(result)
    return res.json(result)
})




//now creating it for mis users
app.route("/misusers/:email").get(async(req,res)=>{
    const email = req.body.email;
    const getemail = await misusers.findOne({email:email})
    res.send(getemail);
    console.log(getemail)
})

app.post('/misusers', async(req, res) => {
    const body = req.body;
    //sending data to db mongose
    const result = await misusers.create({
        name:body.name,
        email:body.email,
        password:body.password 
    });
    console.log(result)
    return res.json(result)
})
//to get all mis users details data
app.get('/misusers', async(req, res) => {
    const results = await misusers.find({
    })
    console.log(results)
    return res.json(results)
})





//now creating it for survey users
app.route("/surveyusers/:email").get(async(req,res)=>{
    const email = req.body.email;
    const getemail = await surveyuser.findOne({email:email})
    res.send(getemail);
    console.log(getemail)
})

app.post('/surveyusers', async(req, res) => {
    const body = req.body;
    //sending data to db mongose
    const result = await surveyuser.create({
        name:body.name,
        email:body.email,
        password:body.password 
    });
    console.log(result)
    return res.json(result)
})
//to get all survey users details data
app.get('/surveyusers', async(req, res) => {
    const results = await surveyuser.find({
    })
    console.log(results)
    return res.json(results)
})

//now creating it for survey creators
app.route("/surveycreators/:email").get(async(req,res)=>{
    const email = req.body.email;
    const getemail = await surveycreators.findOne({email:email})
    res.send(getemail);
    console.log(getemail)
})

app.post('/surveycreators', async(req, res) => {
    const body = req.body;
    //sending data to db mongose
    const result = await surveycreators.create({
        name:body.name,
        email:body.email,
        password:body.password 
    });
    console.log(result)
    return res.json(result)
})
//to get all admin details data
app.get('/surveycreators', async(req, res) => {
    const results = await surveycreators.find({
    })
    console.log(results)
    return res.json(results)
})


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