const mongoss = require("mongoose")


mongoss.connect('mongodb://127.0.0.1:27017/survectionuserlogindetails')
.then(()=>{
    console.log("mongodb is now connected")})
.catch(error=>{console.log("db not connected",error)})


//creating schema
const userscheme = new mongoss.Schema({
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
},
{timestamps:true}
)
//creating model of schema
const admin = mongoss.model("admin",userscheme)

module.exports = admin;
//app.use(express.urlencoded({extended:false}));
