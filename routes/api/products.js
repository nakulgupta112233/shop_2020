const Sequelize = require('sequelize')

const Product=require ('../../db').Product
const route = require ('express').Router()

route.get('/',(req,res)=>{
    Product.findAll()
    .then((products) =>{
        res.status(201).send(products)
    })
    .catch((err)=>{

        res.status(502).send({
            error: "could not retrieve products"
        })
    })
})

route.get('/:v_id',(req,res)=>{
    var cur=req.params.v_id;
    Product.findAll({
       // where: Sequelize.where('v_id',{$lt: 3})
       where:{
           v_id: cur 
       }
    })
    .then((products) =>{
        res.status(201).send(products)
    })
    .catch((err)=>{
        res.status(502).send({
            error: "could not retrieve"
        })
    })
   //res.send(cur);
})

route.get('/pid/:P_id',(req,res)=>{
    var cur=req.params.P_id;
    Product.findAll({
       // where: Sequelize.where('v_id',{$lt: 3})
       where:{
           P_id: cur 
       }
    })
    .then((products) =>{
        res.status(201).send(products)
    })
    .catch((err)=>{
        res.status(502).send({
            error: "could not retrieve"
        })
    })
   //res.send(cur);
})

route.post('/' , (req,res) => {

    Product.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price: parseFloat(req.body.price),
        v_id: parseInt(req.body.v_id)
    })
    .then((product)=>{
        res.status(200).send(product)
    })
    .catch((err)=>{
        res.status(501).send({
            error:"could not create a new product"
        })
        
    })
})

route.delete('/:P_id',(req,res)=>{
    var cur = req.params.P_id;

    Product.destroy({
        where: {P_id: cur}
    })
    .then((num) => {
        res.sendStatus(200);
        
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id="
        });
      });
})
exports = module.exports = route ; 