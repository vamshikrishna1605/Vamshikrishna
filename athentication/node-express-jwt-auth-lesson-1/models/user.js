const mongoose=require('mongoose')
const {isemail}=require("validator")
const userschema= new mongoose.schema({
email:{
    type:String,
    reuired:true,
    lowecase:true,
    validate:[(val) =>{},'pls enter valid email']
},
password:{
    type:String,
    reuired:true,
    lowecase:true,
    minlength:[6,'len should be  6 characterss']
},
userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password, salt)
    next();
})


});
const User = mongoose.model("user",userschema);
module.exports=user; 