const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})
const colors = require('colors')
const express = require('express')
const morgan = require('morgan')
const axios = require('axios').default
const { connectDB } = require('./config/database.js')
const PORT = process.env.PORT

connectDB()

// Routers
const authRouter = require('./routes/authRouter.js')
const gamesRouter = require('./routes/gamesRouter.js')

// initialize app
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routing
app.use('/auth', authRouter)
app.use('/games', gamesRouter)

// Error handling
app.use((req, res, next) => {
    res.status(404).json({
        status: 'failed',
        message: 'cannot find route...',
    })
})

// Start server
app.listen(PORT, (err) => {
    err || console.log(`Server running on port ${PORT}...`.green.underline.bold)
})