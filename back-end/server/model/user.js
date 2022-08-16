const mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    }
})
const Userdb = mongoose.model('Sunhair', userschema)

module.exports = Userdb