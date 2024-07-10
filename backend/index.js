import dotenv from "dotenv";
dotenv.config();
import express from "express";
//connection database
import { connect } from "./database/connect.js";
import userRouter from "./routes/user.js";
import path from "path";

const __dirname = path.resolve();

const app = express();

//database conection
connect();

//get user route
app.use("/api/users", userRouter);

// ------Deployment--------
if (process.env.NODE_ENV == "production") {
  //serve the static page
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({
      message: "This is going to production",
      status: 200,
    });
  });
}
// ------Deployment--------

//server from app
app.listen(process.env.PORT, () => {
  console.log("Server is up and running at port number", process.env.PORT);
});
