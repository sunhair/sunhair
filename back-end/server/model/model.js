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
    discription: {
        type: String,
        reuqire: true
    }
})

const Productdb = mongoose.model('Sunhair', schema)

module.exports = Productdb