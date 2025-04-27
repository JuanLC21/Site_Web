import { Data } from "../models/contact.model.js";

export async function allData () {
    return await Data.find()
}

export async function createData (formData) {
    const newData = new Data(formData)
    return await newData.save()
}

export async function readData (query) {
    return await Data.findById(query)
}

export async function updateData (query, formData) {
    return await Data.updateOne({_id: query}, {$set: formData})
}

export async function deleteData (query) {
    return await Data.deleteOne({_id: query})
}