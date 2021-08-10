const productsModel = require("../models/categoriesModel")
module.exports={
    getAll:async function(req, res, next) {
      try{
        const productos = await productsModel.find()
        res.status(200).json(productos)
      }catch(e){
        console.log(e)
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
      }
    },
    create:async function(req, res, next) {
        try{
          console.log(req.body)
          console.log(req.body.name)

          const document = new productsModel({
            name:req.body.name
          })

          const response = await document.save()

          res.status(201).json(response)
        }catch(e){
          console.log(e)
          if(e.message){
              res.status(500).json({status:"error",mensaje:e.message})
              return
          }
          next(e)
        }
        
    },
    
}