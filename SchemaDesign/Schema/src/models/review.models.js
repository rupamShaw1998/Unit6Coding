const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('review', reviewSchema);