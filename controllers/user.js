const { User } = require('../models/')
const bcrypt = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')
class UserController {
    static register(req, res) {
        let { email, password } = req.body
        User.create({
            email, password
        }).then(success => {
            res.status(201).json(success)
        })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    }

    static login(req, res) {
        User.findOne({
            where:
            {
            email: req.body.email
        }})
            .then(found => {
                if (found && bcrypt.compare(req.body.password, found.password)) {
                    console.log(found)
                    let access_token = jwt.sign({
                        email: found.email,
                        id: found.id
                    })
                    res.status(200).json({
                        access_token
                    })
                } else {
                    res.status(400).json({
                        message: 'password yang anda masukan salah'
                    })
                }

            })
            .catch(err => {
                res.status(500).json('password yang anda masukan salah')
            })
    }

}

module.exports = UserController