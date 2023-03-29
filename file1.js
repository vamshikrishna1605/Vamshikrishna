const fs=require('fs')
const readablestream=fs.createReadStream('file.txt','utf-8')
const writable=fs.createWriteStream('file2.txt')
readablestream.on('data',(chunk)=>{
    console.log(chunk)
WritableStream.write(chunk)
})