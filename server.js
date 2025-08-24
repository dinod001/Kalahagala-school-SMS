import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/dbConnect.js'

dotenv.config()

await connectDb()

//create express server object
const server = express()

//add middlewares
server.use(express.json())


server.get('/',(req,res)=>{
    return res.send('server is running')
})


const PORT=process.env.PORT || 5001

//run server
server.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    
})