import dotenv from "dotenv";
dotenv.config();
import express from "express";
//connection database
import { connect } from "./database/connect.js";
import userRouter from "./routes/user.js";

const app = express();

//database conection
connect();

//one api route
app.get("/", (req, res) => {
  res.json({
    message: "This is going to production",
    status: 200,
  });
});

//get user route
app.use("/api/users", userRouter);

//server from app
app.listen(process.env.PORT, () => {
  console.log("Server is up and running at port number", process.env.PORT);
});
