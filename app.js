require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',router)










app.listen(port,()=>{
    console.log(`running on ${port}`)
})

module.exports = app