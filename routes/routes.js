const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')
require('dotenv').config()
//const upload = require('../config/multerConfig')
const multer = require('../config/multerConfig')
const uploadImage = require('../config/firebase/firebaseConfig')





router.get('/', controllers.getIndexView);
router.get('/products', controllers.getProducts)
router.post('/saveproduct', multer.single("product_img"), uploadImage, controllers.saveNewProduct)//single argument is name of the input file 


module.exports = router;