const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    gender: {type:String,required:true},
    age: {type:String,required:true},
    grade: {type:String,required:true},
    section: {type:String,required:true},
    subject: {type:String,required:true},
},
{
    timestamps:true,
    versionKey:false
})

const products = mongoose.model("products",productSchema)

module.exports = products
