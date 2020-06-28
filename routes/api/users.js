const User = require ('../../db').User
const route = require('express').Router()

route.get('/' , (req,res) => {

    User.findAll()
    .then((users) => {
        res.status(200).send(users)
    })
    .catch((err) => {
        res.status(500).send({

            error : 'could not retirieve users'
        })
    })

})

route.post('/' , (req,res) => {
  console.log("in user.js")
    User.create( {
        name : req.body.name,
        password: req.body.password
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(502).send({
      error : "could not add new user"
        })
    })
})

exports = module.exports=route;