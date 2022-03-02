const axios = require('axios').default

exports.getRecent = async (req, res) => {
    try {
        const date = new Date()
        let prevDate = new Date()
        prevDate.setDate(prevDate.getDate() - 30)
        const currentDateString = date.toISOString().substring(0, 10)
        const previousDateString = prevDate.toISOString().substring(0, 10)
        const url = `https://api.rawg.io/api/games?key=${process.env.RAWGKEY}&dates=${previousDateString},${currentDateString}&order=added&page_size=9&page=1`
        
        let response = await axios.get(url)
    
        response.data.results.map((game) => {
            if (game.rating >= 4) {
                game.price = 59.99
            } else if (game.rating >= 3 && game.rating < 4) {
                game.price = 39.99
            } else if (game.rating < 3) {
                game.price = 19.99
            }
        })
            
        res.json(response.data.results)
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: 'failed to fetch resources...',
            error: error.message
        })
    }
}

exports.getGame = async (req, res) => {
    try {
        const url = `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.RAWGKEY}`
    
        let response = await axios.get(url)
    
        if (response.data.rating >= 4) {
            response.data.price = 59.99
        } else if (response.data.rating >= 3 && response.data.rating < 4) {
            response.data.price = 39.99
        } else if (response.data.rating < 3) {
            response.data.price = 19.99
        }
    
        res.json(response.data)
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: 'failed to fetch game...',
            error: error.message,
        })
    }
}