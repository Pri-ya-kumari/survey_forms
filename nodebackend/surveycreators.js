const mongossgu = require("mongoose")

mongossgu.connect('mongodb://127.0.0.1:27017/survectionuserlogindetails')
.then(()=>{
    console.log("mongodb is now connected for survey creators users")})
.catch(error=>{console.log("db not connected for survey creators users",error)})


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
const surveycreators = mongossgu.model("surveycreators",userscheme)

module.exports = surveycreators;
//app.use(express.urlencoded({extended:false}));
