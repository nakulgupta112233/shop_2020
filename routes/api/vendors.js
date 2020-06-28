const Vendor = require ('../../db').Vendor
const route = require('express').Router()

route.get('/' , (req,res) => {

    Vendor.findAll()
    .then((vendors) => {
        res.status(200).send(vendors)
    })
    .catch((err) => {
        res.status(500).send({

            error : 'could not retirieve vendors'
        })
    })

})

route.post('/' , (req,res) => {
  console.log("in vendors.js")
    Vendor.create( {
        name : req.body.name,
        password: req.body.password
    }).then((vendor) => {
        res.status(201).send(vendor)
    }).catch((err) => {
        res.status(502).send({
      error : "could not add new vendor"
        })
    })
})

exports = module.exports=route;