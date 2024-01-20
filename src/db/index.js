import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// connectDB  object return karta hai

const connectDB= async ()=>{
    try {
     const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST: 
     ${connectionInstance.connection.host}\n`);// jaha pe mongodb ke connection ho rhaa hai vaha pe connect ho jaye kahi dusare me na ho jaye
    }
    catch(error){
        console.log("MONGODB connection errror ",error);
        process.exit(1)    
    }
}

export default connectDB;