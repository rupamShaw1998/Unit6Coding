const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        firstName: { type: String, required: true },
        lastName: { type: String },
        email: { type: String, required: true, unique: true },
        address: [
            {
                houseNumber: { type: String, required: true },
                street: { type: String, required: true },
                city: { type: String, required: true },
                pincode: { type: Number, required: true }
            }
        ]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema);