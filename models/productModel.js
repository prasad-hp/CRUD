import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
        name: {
            type: Number,
            required: [true, "Please enter the Product Name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default:0
        },
        photo: {
            type: String,
            required: false
        },
    }, 
    {
        Timestamp: true
    }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product;