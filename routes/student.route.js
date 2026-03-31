const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controllers')
const { authMiddleware } = require('../middleware/authMiddleware')

router.get('/', authMiddleware, studentController.index)
router.get('/:id', authMiddleware, studentController.detail)
router.post('/', authMiddleware, studentController.store)
// router.put('/:id', studentController.update)
// router.delete('/:id', studentController.destory)

router.get('/generate/code', studentController.generate)

module.exports = router