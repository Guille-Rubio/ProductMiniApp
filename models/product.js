const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    id_product: {
        type: Number,
        required: false,
        trim: true
    },
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    product_description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    imgURL: {
        type: String,
        required: true,
        trim: true
    }
})


const productModel = mongoose.model('products', ProductSchema);

module.exports = productModel;