const express = require('express');
const Product = require('../models/entity.models');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 7;
        const skip = (page-1)*size;
        let sorting = req.query.sort || 1;
        // let brand = req.query.brand;
        const productBrand = req.query.productBrand;
        let filter = {};

        if(productBrand) {
            filter.productBrand = { $in: productBrand }
        }
        
        if(sorting==1) 
            sort = {priceOfProduct: 1}
        else
            sort = {priceOfProduct: -1}

        const product = await Product.find(filter).skip(skip).limit(size).sort(sort).lean().exec();
        const totalPages = Math.ceil((await Product.find(filter).countDocuments())/size);
        return res.status(200).send({product, totalPages});
    }
    catch(err) {
        return res.status(400).send({message: err.message});
    }
})

module.exports = router;
