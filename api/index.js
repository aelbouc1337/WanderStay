import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";
import usersRouter from "./routes/users.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// Midllewares
app.use("/api/auth", authRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);

app.listen(8000, () => {
  connect();
  console.log("server running ....");
});
