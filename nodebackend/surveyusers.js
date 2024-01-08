const mongossgu = require("mongoose")
//mongossgu = gu = general user

mongossgu.connect('mongodb://127.0.0.1:27017/survectionuserlogindetails')
.then(()=>{
    console.log("mongodb is now connected for survey users")})
.catch(error=>{console.log("db not connected for survey users",error)})


//creating schema
const userscheme = new mongossgu.Schema({
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
const surveyusers = mongossgu.model("Surveyusers",userscheme)

module.exports = surveyusers;
//app.use(express.urlencoded({extended:false}));
