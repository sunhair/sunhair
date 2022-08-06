const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

/**
 * @desciption Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)


/**
 * @desciption add product
 * @method GET /add-product
 */
route.get('/add-product', services.add_product)


/**
 * @desciption update product
 * @method GET /update-product
 */
route.get('/update-product', services.update_product)

//API
route.post('/api/products', controller.create)
route.get('/api/products', controller.find)
route.put('/api/products/:id', controller.update)
route.delete('/api/products/:id', controller.delete)


module.exports = route