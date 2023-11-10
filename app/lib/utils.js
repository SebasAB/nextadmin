import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) {
      console.log("Already connected");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB);

    connection.isConnected = db.connections[0].readyState;

    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
