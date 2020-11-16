const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    date: String,
    footprint: String
})

module.exports = mongoose.model('Orders', OrderSchema);