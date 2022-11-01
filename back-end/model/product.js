const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String
  },
  information: {
    type: String
  },
  detail: {
    type: String
  },
  characteristics: {
    type: String
  },
  howtobuy: {
    type: String
  },
});

module.exports = mongoose.model("products", productSchema);
