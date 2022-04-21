const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')
require('dotenv').config()
//const upload = require('../config/multerConfig')
const multer = require('../config/multerConfig')




router.get('/', controllers.getIndexView);
router.get('/products', controllers.getProducts)
router.post('/saveproduct', multer.single("product_img"), controllers.saveNewProduct)//single argument is name of the input file 


module.exports = router;