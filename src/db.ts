import mongoose from "mongoose";

const initDb = async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
};

export default initDb;
