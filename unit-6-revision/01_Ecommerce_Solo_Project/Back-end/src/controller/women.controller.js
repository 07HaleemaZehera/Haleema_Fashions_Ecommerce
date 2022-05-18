const express = require("express")
const Womens = require("../model/women.model")
const authenticate = require("../middleware/authenticate")
const authorised = require("../middleware/authorise")

const router  = express.Router()


router.post("/", async(req,res)=>
{
    
    try{
        const womens = await Womens.create(req.body)
        return res.status(201).send(womens)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
  

})

// router.patch("/:id",authenticate,authorised(["admin", "user"]),async(req,res)=>{
    
//      try {
//          const products= await Products.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
//        return  res.status(201).send(products)
//      } catch (error) {
//          return res.status(500).send({error:error.message})
//      }
//   })


  router.get("",async(req,res)=>{
    
    try {
        const womens= await Mens.find().lean().exec();
      return  res.status(201).send(womens)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })

module.exports = router
