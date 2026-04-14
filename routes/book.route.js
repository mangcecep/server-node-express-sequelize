const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/authMiddleware')
const bookController = require('../controllers/book.controllers')

router.get('/', authMiddleware, bookController.index)
router.get('/:id', authMiddleware, bookController.detail)
router.post('/', authMiddleware, bookController.store)
// router.put('/:id', bookController.update)
// router.delete('/:id', bookController.destory)

module.exports = router