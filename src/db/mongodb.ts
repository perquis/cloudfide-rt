import mongoose from "mongoose";

export const connectWithMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Database is connected with MongoDb correctly! 🚀");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
