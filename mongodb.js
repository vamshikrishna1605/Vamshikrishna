const {MongoClient}=require('mongodb')
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
async function dbconnect()
{
let result=await client.connect()
let db=result.db('e-com')
return  db.collection('products')
}
module.exports=dbconnect
 