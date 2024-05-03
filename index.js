import express from "express"
import mongoose from "mongoose";

const app = express()
const port = 3000;

app.use(express.json())


mongoose.connect('mongodb://localhost:27017/CRUD')
  .then(() => {
    console.log('Connected to DB!');
    app.listen(port, ()=>{
    console.log("Port is running sucessfully")
    })
})

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.post("/api/products", (req, res) =>{
  console.log(req.body)
  res.send(req.body)
})