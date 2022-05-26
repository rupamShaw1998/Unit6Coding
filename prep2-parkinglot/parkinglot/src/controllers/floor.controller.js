
const express = require('express')

const router = express.Router()

const Floor = require('../models/floor.model')

router.post('',async(req,res)=>{
  try{
      const floor = await Floor.create(req.body)
      console.log(floor)
      return res.status(201).send(floor)
  }
  catch(err){
      return res.status(400).send({message : err.message})
  }
})


router.get('',async(req,res)=>{
      try{
          const floor = await Floor.find().lean().exec()
          return res.status(200).send(floor)
      }
      catch(err){
          return res.status(401).send({message : err.message})
      }
})

router.get('/:id',async(req,res)=>{
    try{
        const floor = await Floor.findById(req.params.id).lean().exec()
        return res.status(200).send(floor)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const floor = await Floor.findByIdAndUpdate(req.params.id , req.body,
            {new:true}).lean().exec()
        return res.status(200).send(floor)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})


router.delete('/:id' , async(req,res)=>{
    try{
        const floor = await Floor.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(floor)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }

})

module.exports = router;