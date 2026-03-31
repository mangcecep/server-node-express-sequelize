const express = require('express')
const { registerValidation } = require('../utils/validation')
const router = express.Router()
const { login, register } = require('../controllers/auth.controllers')

router.post('/login', login)
router.post('/register', registerValidation, register)

module.exports = router