import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authroutes.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

const app = express();
connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mern-authentication-woad.vercel.app/",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

export default app;
