const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }]
});

module.exports = mongoose.model('brand', brandSchema);