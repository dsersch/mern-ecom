const mongoose = require('mongoose')
const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.DB_PASSWORD)

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
