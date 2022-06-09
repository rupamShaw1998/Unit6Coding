const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    subCategory: [{
        subName: { type: String, required: true }
    }]
});

module.exports = mongoose.model('category', categorySchema);