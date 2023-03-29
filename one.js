const http=require('http')
const fs=require('fs')
const server=http.createServer(function(req,res){
const name='vamshi'
let html=fs.readFileSync('one.html','utf-8')
html.replace('Name',name)
res.end(html)
})