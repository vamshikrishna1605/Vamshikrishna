const express = require("express")
const dbConnect= require("./mongodb")
const app = express();
app.get("/",async (req,res)=>{
data = await dbConnect();
data = await data.find().toArray();
res.json(data)



}).listen(4000);