const fs=require('fs')
const express=require('express')
const app=express()
//app.use(morgan('dev'))
const tours=JSON.parse(fs.readFileSync('./tours-simple.json'))
app.get('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params)
    const id=req.params.id*1
    const tour=tours.find(el=>el.id==id)
    res.status(200).json({msg:"sucess",
data:{
    tour
}})
})
app.get('/api/v1/users',(req,res)=>{
    //res.status(500).json({
      //  msg:"not yet updated"
      res.send("hii")

    })



app.listen(5000)