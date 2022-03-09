const mongoose = require('mongoose')

const shippingAddressSchema = mongoose.Schema({
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
})

const ShippingAddress = mongoose.model('ShippingAddress', shippingAddressSchema)

module.exports = ShippingAddress