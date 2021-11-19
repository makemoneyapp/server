import dotenv from 'dotenv';
dotenv.config();
import  mongoose from 'mongoose';

const url = process.env.MONGODB_URI;
export const connection = async () => {

    try {
        const res = await mongoose.connect(url);
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}