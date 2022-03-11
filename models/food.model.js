const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        image: {
            type: String,
        },
        
    },
    { timestamps: true },
);

module.exports = mongoose.model('Food', FoodSchema);
