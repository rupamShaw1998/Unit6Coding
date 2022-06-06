const express = require('express');
const Product = require('../models/entity.models');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 7;
        const skip = (page-1)*size;
        const sorting = req.query.sort()
        const product = await Product.find().skip(skip).limit(size).sort().lean().exec();
        const totalPages = Math.ceil((await Product.find().countDocuments())/size);
        return res.status(200).send({product, totalPages});
    }
    catch(err) {
        return res.status(400).send({message: err.message});
    }
})

module.exports = router;
