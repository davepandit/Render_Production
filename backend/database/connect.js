import mongoose from "mongoose";

export const connect = async () => {
  try {
    //connect to the database
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected at ", connectionInstance.connection.host);
  } catch (error) {
    console.log(
      "Something went wrong while connecting to the database:",
      error
    );
    process.exit(1);
  }
};
