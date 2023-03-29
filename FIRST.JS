const http=require('http')
const url=require('url')
const server=http.createServer(function(req,res){
    const path=req.url
    if(path==='/' || path==='/overview'){
        res.end('this is overview')
    }
    if(path==='/product'){
        res.end("this is product")
    }
    else{
        res.end("page not found")
    }

})
server.listen(8000,'127.0.0.1')