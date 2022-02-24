const express = require('express')
const gamesController = require('../controllers/gamesController.js')

const router = express.Router()

router
    .route('/recent')
    .get(gamesController.getRecent)

module.exports = router;