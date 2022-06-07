const express = require('express');
const Brand = require('../models/brand.models');

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const brand = await Brand.create(req.body);
        return res.status(201).send(brand);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const brand = await Brand.find().lean().exec();
        return res.status(200).send(brand);
    }
    catch(err) {
        return res.status(500).send(err);
    }
});

module.exports = router;