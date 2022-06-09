const express = require('express');
const User = require('../models/user.models');

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/:id/address", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user.address);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.post("/:id/addresses/create" , async(req,res) => {
    try{
        const addresses = await User.updateOne({_id:req.params.id} , {$push : {address:req.body}});
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user.address);
      
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
});

router.patch("/:id/addresses/:idx/edit" , async(req,res) => {
    try{
        const addresses = await User.updateOne({_id:req.params.id , "address._id":req.params.idx} , {$set: {"address.$":req.body}})

        const user = await User.findById(req.params.id).lean().exec()
        return res.status(200).send(user.address)
      
     }
     catch(err){
         return res.status(400).send({message:err.message})
     }
});

module.exports = router;