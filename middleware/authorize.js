const {Todo}= require('../models/')

module.exports = function(req, res, next) {
    
    try {
       
        Todo.findOne({
            where:{
                id: req.params.id
            }
        })
        .then(result => {
            console.log(req.params.id)
            console.log(req.userLogin)
            console.log(result)
            
            console.log('ketemu')           
            
            if(result && result.UserId == req.userLogin) {
                console.log('ketemu sama ga')     

               
                console.log(req.userLogin)
                next()
            } else {
                throw new Error(`Bad request`)
            }
        })
        .catch(err => {
            res.status(400).json({
                message: err.message
            })
        })
    } catch(err) {
        res.status(400).json({
            message: 'Bad request'
        })
    }
}