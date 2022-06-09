const express = require('express');
const Order = require('../models/order.models');
const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const order = await Order.create(req.body);
        return res.status(201).send(order);
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const order = await Order.find()
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
        return res.status(200).send(order);
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).lean().exec();
        return res.status(200).send(order);
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.id.params, req.body, { new: true }).lean().exec();
        return res.status(200).send(order); 
    }
    catch(err) {
        return res.status(400).send(err);
    }
});

module.exports = router;

