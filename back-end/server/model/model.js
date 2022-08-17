const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    information: {
        type: String,
        reuqire: true
    },
    detail: String,
    characteristics: String,
    howtobuy: String,
    // image: {
    //     data: Buffer,
    //     contentType: String
    // }
})

const Productdb = mongoose.model('Sunhair', schema)

module.exports = Productdb