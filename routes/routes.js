const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')
require('dotenv').config()


router.get('/',controllers.getIndexView);
router.get('/products', controllers.getProducts)
//router.post('/saveproduct')


module.exports=router;