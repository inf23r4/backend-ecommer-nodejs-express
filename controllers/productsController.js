const productsModel = require("../models/productsModel")
module.exports={
    getAll: async function(req, res, next) {
        try{
            let queryFind = {}
        if(req.query.buscar){
            queryFind={featuredproducts:{$regex:".*"+req.query.featuredproducts+".*",}}
        }
            const documents = await productsModel.find(queryFind)
            res.json(documents)
        }catch(e){
            console.log(e)
        }
    },
    getById: async function(req, res, next) {
        console.log(req.params)
        try{
            const documents = await productsModel.findById(req.params.id)
            res.json(documents)
        }catch(e){
            console.log(e)
        }
    },
    create: async function(req, res, next) {
        console.log(req.body)
        try{
            const product = new productsModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                featuredproducts:req.body.featuredproducts
            })
            const document = await product.save()
            res.json(document)
        }catch(e){
            console.log(e)
        }
        
        
    },
    update:async function(req, res, next) {
        try{
            console.log(req.params)
            console.log(req.body)
            const producto = await productsModel.updateOne({_id:req.params.id},req.body)
            res.json(producto)
        }catch(e){
            next(e)
        }
      },
    delete: async function(req, res, next) {
          try{
            console.log(req.params)
            const producto = await productsModel.deleteOne({_id:req.params.id})
            res.json(producto)
          }catch(e){
            next(e)
          }
      }
}