const express = require("express")
const dbConnect= require("./mongodb")
const app = express();
app.use(express.json())
app.put("/",async (req,res)=>{
data = await dbConnect();
data = await data.updateOne({
    name: req.body.name},{
        $set:
        {
            name:req.body.updatedName
        }
    })
  res.send("ok").status(200)


}).listen(4000);