const express = require('express');
const Product = require('../models/product.models');

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/:id/address", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product.address);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(200).send(product);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

module.exports = router;