const mongoose = require('mongoose');
const procductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

module.exports = mongoose.model('products', procductSchema);