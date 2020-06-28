
const Sequelize = require('sequelize')
const Cart=require ('../../db').Cart
const route = require ('express').Router()

route.get('/',(req,res)=>{
    Cart.findAll()
    .then((carts) =>{
        res.status(201).send(carts)
    })
    .catch((err)=>{

        res.status(502).send({
            error: "could not retrieve carts"
        })
    })
})

route.post('/' , async (req,res) => {


    let item = await Cart.findOne({
        where:{
            id: req.body.id,
            P_id: req.body.P_id
        }
    })
    if(!item){
   item= await Cart.create({
        id:req.body.id,
        P_id:req.body.P_id,
        v_id:req.body.v_id,
        price: parseFloat(req.body.price),
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        quantity:1
    })
        
}
    else{
        await item.increment({
            quantity: 1
        })

    }

 return res.send(item)
})
route.delete('/:id',(req,res)=>{
    var cur = req.params.id;

    Cart.destroy({
        where: {id: cur}
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

route.put('/inc/:P_id/:quant',(req,res)=>{
    var cur = req.params.P_id;
    var quants = req.params.quant;

    Cart.update({
        quantity: Number(quants)+1
    },

        {where: {P_id: cur}
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
route.put('/dec/:P_id/:quant',async (req,res)=>{
    var cur = req.params.P_id;
    var quants = req.params.quant;

    /*let item = await Cart.findOne({
        where:{
            id: req.body.id,
            P_id: cur,
            quantity: 0
        }
    })*/
    if(quants == 1){
        Cart.destroy({
            where: 
            {
                P_id: cur,
            
            }
        })
        .then((num) => {
            res.sendStatus(200);
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Tutorial with id="
            });
          });

    }
    else{
     Cart.update({
        quantity: Number(quants)-1
    },

        {where: {P_id: cur}
    })
    .then((num) => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id="
        });
      });
    }
})
route.get('/:id',(req,res)=>{
    var cur=req.params.id;
    Cart.findAll({
       // where: Sequelize.where('v_id',{$lt: 3})
       where:{
           id: cur 
       }
    })
    .then((carts) =>{
        res.status(201).send(carts)
    })
    .catch((err)=>{
        res.status(502).send({
            error: "could not retrieve"
        })
    })
   //res.send(cur);
})

exports = module.exports = route ; 