import mongoose from "mongoose";

// Defind Schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldprice: {
        type: Number,
        required: true,
    },
    img: {
        type: Array,
        required: true,
    },
    prdcode: {
        type: String,
        required: true,
    },
    size: {
        type: [String],
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    totalProducts: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specification: {
        type: String,
    },
    brand: {
        type: String,
    },
}, {
    timestamps: true
});

// Model
const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;