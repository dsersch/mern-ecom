const axios = require('axios').default

exports.getRecent = async (req, res) => {
    const date = new Date()
    let prevDate = new Date()
    prevDate.setDate(prevDate.getDate() - 30)
    const currentDateString = date.toISOString().substring(0, 10)
    const previousDateString = prevDate.toISOString().substring(0, 10)
    const url = `https://api.rawg.io/api/games?key=${process.env.RAWGKEY}&dates=${previousDateString},${currentDateString}&order=added&page_size=9&page=1`
    
    const response = await axios.get(url)
        
    res.json(response.data.results)
}

exports.getGame = async (req, res) => {
    const url = `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.RAWGKEY}`

    const response = await axios.get(url)

    res.json(response.data)
}