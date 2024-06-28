import mongoose from "mongoose";

// Defind Schema
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    gender: {
        type: String,
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    zip: {
        type: String,
    },
}, {
    timestamps: true
});

// Model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;