const express = require("express")
const dbConnect= require("./mongodb")
const app = express();
app.use(express.json())
app.post("/",async (req,res)=>{
data = await dbConnect();
data = await data.insertOne(req.body)
  res.send("ok").status(200)


}).listen(4000);