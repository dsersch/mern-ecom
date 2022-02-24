const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})
const express = require('express')
const morgan = require('morgan')
const axios = require('axios').default
const PORT = process.env.PORT

// Routers
const gamesRouter = require('./routes/gamesRouter.js')

// initialize app
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

app.use('/games', gamesRouter)

// Start server
app.listen(PORT, (err) => {
    err || console.log(`Server running on port ${PORT}...`)
})