const exp=require('express')
 const app=exp()
 //const router=exp.Router()

//const urlCheck=require('./v')
app.get('/abc',(req,res)=>
 {
    res.end("hello")})

   // console.log(c)

 app.get('/logon',(req,res)=>
 {
    res.end("login")
 })
 //app.use('/',router)
app.listen(4000,()=>{
    console.log("running")
 })
 
 