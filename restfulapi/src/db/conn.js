const mongoose = require("mongoose")
mongoose.connect("mongodb//locolhost:27017/students-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("connection sucessful")
}).catch((e)=>{
    console.log("no connection")
})