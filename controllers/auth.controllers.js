const { validationResult } = require('express-validator')
const bycript = require('bcryptjs')
const { User } = require('../models')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({
        where: {
            email: email
        }
    })

    if (!user) {
        return res.status(400).json({
            message: "Email not registered"
        })
    }

    const isPasswordValid = await bycript.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })

    res.status(200).json({
        message: "login successful!",
        token: token
    })

}

const register = async (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json(error)
    }

    const {
        firstName,
        lastName,
        email,
        password
    } = req.body

    const hashedPassword = await bycript.hash(password, 10)

    const userRegistered = await User.findOne({
        where: {
            email: email
        }
    })

    if (userRegistered) {
        return res.status(400).json({
            message: "Email already registered"
        })
    }

    User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    })

    res.status(200).json({
        message: "Register successful!",
    })

}

module.exports = {
    login,
    register
}