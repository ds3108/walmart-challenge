const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const products = new Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number,
}, { collection: 'products' });
module.exports = mongoose.model('products', products);