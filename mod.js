//const { upperCase } = require('lodash')

var http=require('http')
var uc=require('upper-case')
const server=http.createServer((req,res)=>{
    res.end(uc.upperCase("hello"))
})
server.listen(4000,()=>{
    console.log("running")
})