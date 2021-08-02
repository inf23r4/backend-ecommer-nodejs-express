const mongoose = require("../bin/mongodb")
const errorMessage = require('../util/errorMessage')
const productSchema = new mongoose.Schema({
   name:{
      type:String,
      required:[true,errorMessage.GENERAL.campo_obligatorio]
   },
   sku:String,
   description:String,
   price:{
      type:Number,
      min:[1,errorMessage.GENERAL.min]
   },
   featuredproduct:{
      type:Boolean
   }
})
module.exports = mongoose.model("productos",productSchema)