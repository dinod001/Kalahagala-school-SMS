import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/dbConnect.js'
import studentRouter from './routes/studentRoute.js'
import userRouter from './routes/user.js'

dotenv.config()

await connectDb()

//create express server object
const server = express()

//add middlewares
server.use(express.json())


server.get('/',(req,res)=>{
    return res.send('server is running')
})

server.use('/api/student',studentRouter)
server.use('/api/student',userRouter)

const PORT=process.env.PORT || 5001

//run server
server.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})