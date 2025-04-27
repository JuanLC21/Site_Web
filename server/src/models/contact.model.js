import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    address: { type: String, required: true }, 
    phone: { type: Number, required: true, unique: true}, 
    message: { type: String, required: true }
})

export const Data = mongoose.model('Data', formSchema)