const { body } = require('express-validator')

const self = {}

self.registerValidation = [
    body('firstName').not().notEmpty().withMessage('First name is required'),
    body('lastName').not().notEmpty().withMessage('Last name is required'),
    body('email').notEmpty().isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

module.exports = self