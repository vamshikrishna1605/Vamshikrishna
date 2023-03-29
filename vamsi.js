var fs=require('fs')
//fs.readFile('input.txt','utf-8',function(err,data){
//fs.readFile('file.txt','utf-8',function(err,data1){
    // fs.writeFile('calc1.txt','${data1} ${data}',function(err){
     //   console.log('data written')
  //  })
//})

///})


const http=require('http')
const url=require('url')
const data=fs.readFileSync('data.json','utf-8')
const dobj=JSON.parse(data)
const server=http.createServer(function(req,res){
    console.log(req.url)
    const{path,query}=(url.parse(req.url,true))
   // const path=req.url
    if(path==='/' || path==='/overview'){
        res.end('this is overview')
    }
   else if(path==='/product'){
        res.end('<h1>this is product</h1>')
        console.log(query)
    }
    else if(path==='/api'){
        res.end(data)

    }
    else{
        res.end('page not found')
    }

})
server.listen(3000,'127.0.0.1',function(){
    console.log("running")m
})