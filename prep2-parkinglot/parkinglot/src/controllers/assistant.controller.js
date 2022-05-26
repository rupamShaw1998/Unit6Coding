

const express = require('express')


const router  = express.Router()

const Assist = require('../models/assistant.model')

router.post('' , async(req,res)=>{
    try{
        const assist =  await Assist.create(req.body)
        return res.status(201).send(assist)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.get('/:id' , async(req,res)=>{
    try{
        const assist =  await Assist.findById(req.params.id).lean().exec()
        return res.status(200).send(assist)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

router.get('' , async (req,res)=>{
    
    try{
        const assist =  await Assist.find().lean().exec()
        return res.status(200).send(assist)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

router.patch('/:id' , async(req,res)=>{
    try{
        const assist =  await Assist.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .lean().exec()
        return res.status(200).send(assist)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})


router.delete('' , async(req,res)=>{
    try{
        const assist =  await Assist.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(assist)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;