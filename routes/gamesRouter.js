const express = require('express')
const gamesController = require('../controllers/gamesController.js')

const router = express.Router()

router
    .route('/recent')
    .get(gamesController.getRecent)

router
    .route('/:id')
    .get(gamesController.getGame)

module.exports = router;