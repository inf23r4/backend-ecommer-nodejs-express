const productsModel = require("../models/productsModel")
module.exports={
    getAll: async function(req, res, next) {
        try{
            let queryFind = {}
        if(req.query.featured){
            queryFind={productdestacado:{$regex:".*"+req.query.featured+".*",$options:"i"}}
        }
            const documents = await productsModel.find(queryFind).populate("category")
            res.status(200).json(documents)
        }catch(e){
            console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
    getById: async function(req, res, next) {
        console.log(req.params)
        try{
            const documents = await productsModel.findById(req.params.id).populate("category")
            res.status(200).json(documents)
        }catch(e){
            console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
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
                productdestacado:req.body.productdestacado,
                category:req.body.category
            })
            const document = await product.save()
            res.status(201).json(document)
        }catch(e){
            console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
        
        
    },
    update:async function(req, res, next) {
        try{
            console.log(req.params)
            console.log(req.body)
            const producto = await productsModel.updateOne({_id:req.params.id},req.body)
            res.status(200).json(producto)
        }catch(e){
            console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            
            next(e)
        }
      },
    delete: async function(req, res, next) {
          try{
            console.log(req.params)
            const producto = await productsModel.deleteOne({_id:req.params.id})
            res.status(200).json(producto)
          }catch(e){
            console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            
            next(e)
        }
      }
}