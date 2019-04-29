const express = require('express')
const router = express.Router()
const todo = require('./todo')
const {userCont} = require('../controllers')



router.use('/todos',todo)
router.post('/register',userCont.register)
router.post('/login',userCont.login)










module.exports = router