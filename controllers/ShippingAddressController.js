const mongoose = require('mongoose')
const ShippingAddress = require('../models/ShippingAddres.js')
const User = require('../models/User.js')

exports.createShippingAddress = async (req, res) => {
    try {
        const newAddress = await ShippingAddress.create({
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
        })

        const user = await User.findByIdAndUpdate(req.user._id, { addresses: [ ...req.user.addresses, newAddress._id ]})

        res.status(201).json({
            status: 'success',
            data: user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 'failed',
            message: 'failed to create address...',
            error,
        })
    }
}