import { allData, createData, readData, updateData, deleteData } from '../services/contact.service.js'

//ALL
export const getAllData = async (req, res) => {
    try {
        const allContacts = await allData()
        console.log('All client has been showed')
        res.status(200).json(allContacts)
    } catch(error) {
        console.error(error)
        res.status(500)
    }
}
//CREATE    
export const postData = async (req, res) => {
    try {
        const createContact = await createData(req.body)
        console.log('New client has been added')
        res.status(200).json(createContact)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}
//READ
export const getData = async (req, res) => {
    try {
        const readContact = await readData(req.params.id)
        console.log('This client has been found')
        res.status(200).json(readContact)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}
//UPDATE
export const putData = async (req, res) => {
    try {
        const updateContact = await updateData(req.params.id, req.body)
        console.log('This client has been modified')
        res.status(200).json(updateContact)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}
//DELETE
export const removeData = async (req, res) => {
    try {
        const deleteContact = await deleteData(req.params.id)
        console.log('This client has been removed')
        res.status(200).json(deleteContact)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}