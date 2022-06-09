const express = require('express');
const Category = require('../models/category.models');
const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(201).send(category);
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const category = await Category.find()
        .populate({
            path: "products",
            select: { name: 1, _id: 0 }
        })
        .populate({
            path: "user",
            select: 'name'
        })
        .lean()
        .exec();
        return res.status(200).send(category);
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).lean().exec();
        return res.status(200).send(category);
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.id.params, req.body, { new: true }).lean().exec();
        return res.status(200).send(category); 
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

module.exports = router;

