import mongoose from "mongoose";


const connectDb = async ()=>{
    try {
        mongoose.connection.on("connected",()=>console.log('Database connected'))
        await mongoose.connect(`${process.env.DATABASE_URL}/schoolDB`)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb 