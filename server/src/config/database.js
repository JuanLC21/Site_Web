import mongoose from 'mongoose'

async function databaseConnection() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('¡Database connection success!')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

export default databaseConnection