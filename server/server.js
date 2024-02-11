import express, { response } from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connect from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// configure env
dotenv.config(); //where the env files are located. as it is in root folder. so need to add path object in config folder.

//database config
connectDB();

// rest object
const app = express(); // to use the package of express, we need to require the package of express in 1st line

// middlewares (configure morgan)
app.use(cors()); // to avoid errors while connecting two ports
app.use(express.json()); // to enable json, using this, we can able to send the data in request and response.
app.use(morgan("dev")); // it shows in console that which url is getting hitted

// routes

app.post('/temp',(req, res)=>{
  res.json({message:"welcome to the Check"})
})

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "<h1>welcome to mern stac app</h1>"

  });

});


//PORT
const PORT = process.env.PORT || 8080; // it will consider 8080 port if there is any issue in given port

//run listen
app.listen(PORT, () => {
  console.log(
    `server Running on ${process.env.DEV_MODE} at ${PORT}`.bgCyan.white
  ); // as we are using colors package. so, we need to require it in 2nd line
});
