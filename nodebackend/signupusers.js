const mongossmi = require("mongoose")
//mongossgu = mi = mis users

mongossmi.connect('mongodb://127.0.0.1:27017/survectionuserlogindetails')
.then(()=>{
    console.log("mongodb is now connected for signup users")})
.catch(error=>{console.log("db not connected for signup users",error)})


//creating schema
const userscheme = new mongossmi.Schema({
    name: {
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true, 
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    roles:{
        type:String,
        require:true
    },
},
{timestamps:true}
)
//creating model of schema
const misusers = mongossmi.model("signuserall",userscheme)

module.exports = misusers;
//app.use(express.urlencoded({extended:false}));
