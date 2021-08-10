const mongoose = require("../bin/mongodb")
const errorMessage = require('../util/errorMessage')
const productSchema = new mongoose.Schema({

   name:{
      type:String,
      required:[true,errorMessage.GENERAL.campo_obligatorio],
      minlength:[3,errorMessage.GENERAL.minlength]

   },
   sku:String,

   description:String,

   price:{
      type:Number,
      min:[1,errorMessage.GENERAL.min]
   },
   productdestacado:{
      type:Boolean
   },
   category:{
      type:mongoose.Schema.ObjectId,
      ref:"categories"
   },
   createAt:{
      type:Date,
      default:Date.now
   }
})
module.exports = mongoose.model("productos",productSchema)