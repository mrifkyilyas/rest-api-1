const { Todo } = require('../models')
class TodoController {
    static addTodo(req, res) {
        const { title, description } = req.body
        const UserId = req.userLogin
        console.log(req.userLogin)
        Todo.create({
            title, description,UserId
        })
            .then((todo) => {
                res.status(201).json(todo)
            })
            .catch(err => {
                res.status(500).json(err)
            })


    }

    static deleteTodo(req, res) {
        const id = req.params.id

        Todo
            .findByPk(id)
            .then((todo) => {
                if (!todo) {
                    res.status(404).json('data tidak ada')
                } else {
                    return todo.destroy()
                }
            })
            .then((success) => {
                res.status(200).json('berhasil dihapus')
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static getAllTodo(req, res) {
        Todo.findAll()
            .then((todos) => {
                res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static getOneTodo(req, res) {
        const id = req.params.id
        Todo.findByPk(id)
            .then((todos) => {
                if (!todos) {
                    res.status(200).json({
                        msg: "data tidak ada"
                    })
                } else {
                    res.status(200).json(todos)

                }

            })
            .catch(err => {
                res.status(500).json(err)
            })


    }

    static updateTodo(req, res) {
        Todo.update({
            ...req.body
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then((todo) => {
                res.status(200).json(todo)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }




}

module.exports = TodoController