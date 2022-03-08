const mongoose = require('mongoose')
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')

exports.registerNewUser = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        const token = newUser.getSignedToken()

        res.status(201).json({
            status: 'success',
            user: newUser,
            token,
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: 'failed to create user...',
        })
    }
}

exports.login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            status: 'failed',
            message: 'Please provide an email and a password...',
        })
    }

    try {
        const user = await User.findOne({ email: req.body.email }).select('+password');

        if (!user || !(await user.matchPassword(req.body.password))) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incorrect Email or Password...'
            })
        }

        const token = user.getSignedToken()

        res.status(200).json({
            status: 'success',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                userCart: user.userCart,
                token,
            },
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: 'Failed to find that user...',
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)

        res.status(200).json({
            status: 'success',
            data: user,
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: 'user not found...'
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
            new: true,
        })

        res.status(200).json({
            status: 'success',
            data: updatedUser,
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: 'failed to update user...'
        })
    }
}

exports.protect = async (req, res, next) => {
    try {
        let token
    
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
    
        if (!token) {
            return res.status(401).json({
                status: 'failed',
                message: 'failed to find token...'
            })
        }
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodedToken) {
            return res.status(401).json({
                status: 'failed',
                message: 'failed to verify token...'
            })
        }
    
        const loggedInUser = await User.findById(decodedToken.id)

        if (!loggedInUser) {
            return res.status(401).json({
                status: 'failed',
                message: 'User no longer exists...'
            })
        }

        req.user = loggedInUser
    
        next()
    } catch (error) {
        res.status(401).json({
            status: 'failed',
            message: 'not authorized...'
        })
    }
}