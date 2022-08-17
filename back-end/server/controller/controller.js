var Product = require('../model/model')
var fs = require('fs');
const multer = require('multer')



//storage image



const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: Storage
}).single('testImage')
//create and save new product

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" })
        return;
    }




    //new product
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        information: req.body.information,
        detail: req.body.detail,
        characteristics: req.body.characteristics,
        howtobuy: req.body.howtobuy,
        image: {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: "image/jpg",
        },
    })

    //save product
    product
        .save(product)
        .then(data => {
            // res.send(data)
            res.redirect('/add-product')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "sth went wrong"
            })
        })
}





// retrieve and return all products/ retive and return a single product
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id

        Product.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Can not found this product" })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving product" })
            })
    } else {
        Product.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error" })
            })
    }


}

//update a new identified product by id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not update this product` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update" })
        })

}


//delete 
exports.delete = (req, res) => {
    const id = req.params.id

    Product.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot delete this product" })

            } else {
                res.send({
                    message: "Delete successful"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Product: " + id
            })
        })
}