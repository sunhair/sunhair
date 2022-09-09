const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Product = require("../model/product");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new user
    let product = new Product({
      name: req.body.name,
      category: req.body.category,
      information: req.body.information,
      detail: req.body.detail,
      characteristics: req.body.characteristics,
      howtobuy: req.body.howtobuy,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await product.save();
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let product = await Product.find();
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    let product = await Product.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
    // Delete user from db
    await product.remove();
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || user.name,
      category: req.body.category || user.category,
      information: req.body.information || user.information,
      detail: req.body.detail || user.detail,
      characteristics: req.body.characteristics || user.characteristics,
      howtobuy: req.body.howtobuy || user.howtobuy,
      avatar: result?.secure_url || user.avatar,
      cloudinary_id: result?.public_id || user.cloudinary_id,
    };
    product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find product by id
    let product = await Product.find({_id:req.params.id});
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

router.get("/category/:category",async(req,res)=>{
  try{
    const relativeProduct = await Product.find({category:req.params.category});
    res.json(relativeProduct);
  } catch(err){
    console.log(err);
  }
});

module.exports = router;
