const express = require('express')
const router = express.Router()
const {todoCont} = require('../controllers')
const authen = require('../middleware/authen')
const authorize = require('../middleware/authorize')

router.get('/',todoCont.getAllTodo)
router.post('/',authen,todoCont.addTodo)
router.delete('/:id',authen,authorize,todoCont.deleteTodo)
router.put('/:id',authen,authorize,todoCont.updateTodo)
router.patch('/:id',authen,authorize,todoCont.updateTodo)
router.get('/:id',authen,authorize,todoCont.getOneTodo)









module.exports = router