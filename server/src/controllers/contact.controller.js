import { allData, createData, readData, updateData, deleteData } from '../services/contact.service.js'

//ALL
export const getAllData = async (req, res) => {
    try {
        const allContacts = await allData()
        res.status(200).json(allContacts)
    } catch(error) {
        console.error(error)
        res.status(500)
    }
}
//CREATE    
export const postData = async (req, res, next) => {
    try {
        const createContact = await createData(req.body)
        res.status(200).json(createContact)
    } catch (error) {
        if (error.code === 11000) {
            error.message = 'There are duplicated inputs'
            error.statusCode = 500
        }
        if (error.name === 'ValidationError') {
            error.message = 'Inputs validation error'
        }
        next(error)
    }
}
//READ
export const getData = async (req, res, next) => {
    try {
        const readContact = await readData(req.params.id)
        if (!readContact) {
            const newError = new Error('ID client not found')
            newError.statusCode = 404
            throw newError
        }
        res.status(200).json(readContact)
    } catch (error) {
        if (error.name === 'CastError') {
            error.message = 'Invalid client ID'
            error.statusCode = 404
        }
        next(error)
    }
}
//UPDATE
export const putData = async (req, res, next) => {
    try {
        const updateContact = await updateData(req.params.id, req.body)
         if (updateContact.matchedCount === 0) {
            const newError = new Error('Client has not been modified because ID does not match')
            newError.statusCode = 404
            throw newError
        }
        res.status(200).json(updateContact)
    } catch (error) {
       next(error)
    }
}
//DELETE
export const removeData = async (req, res, next) => {
    try {
        const deleteContact = await deleteData(req.params.id)
        if (deleteContact.deletedCount === 0) {
            const newError = new Error('Client has not been deleted because ID does not match')
            newError.statusCode = 404
            throw newError
        }
        res.status(200).json(deleteContact)
    } catch (error) {
        if (error.name === 'CastError') {
            error.message = 'Invalid client ID'
            error.statusCode = 404
        }
        next(error)
    }
}
//WRONG URL
const failedRouter = (req, res, next) => {
    const newError = new Error('Url not found')
    newError.statusCode = 404
    next(newError)
}

export default failedRouter