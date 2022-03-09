const express = require('express')
const authController = require('../controllers/authController.js')

const router = express.Router()

router
    .route('/register')
    .post(authController.registerNewUser)

router
    .route('/login')
    .post(authController.login)

router
    .route('/profile')
    .get(authController.protect, authController.getUser)
    .patch(authController.protect, authController.updateUser)

module.exports = router