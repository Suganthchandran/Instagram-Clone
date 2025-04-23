import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB Atlas");

    mongoose.connection.on('error', (err) => {
      console.log('MongoDB runtime error:', err);
    });

  } catch (error) {
    console.error("Initial MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
