const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
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
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
