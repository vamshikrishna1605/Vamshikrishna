const User = require("./User")

const handleErrors=(err)=>{
    console.log(err.message,err.code)
}

module.exports.signup_get=(req,res)=>{
    res.render('signup');
}

module.exports.login_get=(req,res)=>{
    res.render('signup');
}

module.exports.login_post=(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    res.send('signup');
}

module.exports.signup_post=async(req,res)=>{
    const {email,password}=req.body;
    //console.log(email,password);
    //res.send('signup');
try{
const user=await User.create({email,password});
  res.status(201).json(user)
}
catch(err){

    console.log(err)
}
}
