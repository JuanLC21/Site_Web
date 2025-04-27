import express from 'express'
import { getAllData, postData, getData, putData, removeData } from '../controllers/contact.controller.js'

const router = express.Router()

router
    .get('/contact/all', getAllData)
    .post('/contact', postData)
    .get('/contact/:id', getData)
    .put('/contact/update/:id', putData)
    .delete('/contact/delete/:id', removeData)

export default router
