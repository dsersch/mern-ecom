const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})
const express = require('express')
const morgan = require('morgan')
const axios = require('axios').default
const PORT = process.env.PORT

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/recent', async (req, res) => {
    
    const date = new Date()
    let prevDate = new Date()
    prevDate.setDate(prevDate.getDate() - 30)
    const currentDateString = date.toISOString().substring(0, 10)
    const previousDateString = prevDate.toISOString().substring(0, 10)
    const url = `https://api.rawg.io/api/games?key=${process.env.RAWGKEY}&dates=${previousDateString},${currentDateString}&order=added&page_size=9&page=1`

    const response = await axios.get(url)
    
    res.json(response.data.results)
})

app.listen(PORT, (err) => {
    err || console.log(`Server running on port ${PORT}...`)
})