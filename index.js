import express from "express"
import mongoose from "mongoose";

const app = express()
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log("Port is running sucessfully")
})

mongoose.connect('mongodb://localhost:27017/CRUD')
  .then(() => console.log('Connected to DB!'));