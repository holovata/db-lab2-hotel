import mongoose from 'mongoose';
const uri = "mongodb+srv://kholovata:bAbobu1234@cluster0.zcyoiik.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connection established successfully');
    } catch (err) {
        console.error('Error in DB connection: ' + err);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;