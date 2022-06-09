const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
   quantity: { type: Number, required: true },
   productId : [{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'product',
      required : true
   }],
   userId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'user',
      required : true
   }
});

module.exports = mongoose.model('reviews', orderSchema);