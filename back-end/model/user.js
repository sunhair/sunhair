const mongoose = require("mongoose");
const {Schema} = mongoose;

const Product = new Schema({
   product_id: String,
   quantity: Number,
   product_code: String
})

const userSchema = new Schema({
   email: String,
   phone: String,
   time_register: Date,
   cart: [Product]
})

module.exports = mongoose.model("user", userSchema);