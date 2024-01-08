const mongossmi = require("mongoose")
//mongossgu = mi = mis users

mongossmi.connect('mongodb://127.0.0.1:27017/survectionuserlogindetails')
.then(()=>{
    console.log("mongodb is now connected for mis users")})
.catch(error=>{console.log("db not connected for mis users",error)})


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
},
{timestamps:true}
)
//creating model of schema
const misusers = mongossmi.model("misuser",userscheme)

module.exports = misusers;
//app.use(express.urlencoded({extended:false}));
