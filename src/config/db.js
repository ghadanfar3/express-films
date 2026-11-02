import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connection Sucessfully");
  } catch (error) {
    cnosole.error("MongoDB Connection Failed ", error.message);
    process.exit(1);
  }
};
export default connectDB;