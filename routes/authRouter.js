const express = require('express')
const authController = require('../controllers/authController.js')
const addressController = require('../controllers/ShippingAddressController.js')

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

router
    .route('/address')
    .post(authController.protect, addressController.createShippingAddress)

router
    .route('/address/:id')
    .delete(authController.protect, addressController.deleteAddress)

module.exports = router