import express from 'express'
import databaseConnection from './config/database.js'
import router from './routes/contact.routes.js'
import failedRouter from './controllers/contact.controller.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 3000

async function startServer () {
    try {
        await databaseConnection() 
        app.use(express.json())
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); 
            res.header('Access-Control-Allow-Headers', 'Content-Type'); 
            next();
        })
        app.use('/', router)
        app.use(failedRouter)
        app.use(errorHandler)
        app.listen(PORT, () => console.log(`Server on port: ${PORT}`))

    } catch (error) {
        console.error('Failed server deploy', error)
        process.exit(1)
    }
}

startServer()
