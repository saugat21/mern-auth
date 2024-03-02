import mongoose from "mongoose";

const connectDb = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected :${conn.connection.host}`);
    } catch (error) {
        console.error(`Error :${error.message}`);
        process.exit(1);
    }
}

export default connectDb;