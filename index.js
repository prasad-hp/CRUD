import express from "express"
import mongoose from "mongoose";
import Product from "./models/productModel.js"

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

app.get("/api/products", async(req, res)=>{
    try{
      const products = await Product.find({})
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
})

app.post("/api/products", async(req, res) =>{
    try {
      // const product = await new Product(req.body)
      // product.save().then(()=> console.log("Saved"))

      const product = await Product.create(req.body)
      res.status(200).json(product)
      
    } catch (error) {
      res.status(500).json({message: error.message})
    }
})

app.get("/api/product/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product)
    
  } catch (error) {
    res.status(500).json({message:error.message})
    
  }
})

app.put("/api/product/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
      return res.status(404).json({message:"Product not found"})
    }

    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)

  } catch (error) {
    res.status(500).json({message:error.message})
    
  }
})
app.patch("/api/product/:id", async(req, res)=>{
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
      return res.status(404).json({message: "Product not found"})
    }
    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)



  }
  catch (error){
    res.status(500).json({message:error.message})
  }
})

app.delete("/api/product/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    if(!product){
      return res.status(404).json({message: "Wrong Product ID"})
    }
    res.status(200).json({message:"product deleted successfully"})
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})