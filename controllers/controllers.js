const Product = require('../models/product')
require('mongoose');

const getIndexView = (req, res) => {
    res.status(200).render('index')
}

const getProducts = async (req, res) => {
    const savedProducts = await Product.find()
    //leer productos
    //recuperar url de la imagen (getDownloadUrl)

    //pintar productos
    console.log("********", savedProducts.length)

    res.status(200).render('products', { savedProducts: savedProducts })
}

const saveNewProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const firebaseUrl = req.file.firebaseUrl;
        const newProduct = new Product({
            product_name: name,
            product_description: description,
            price: price,
            imgURL: firebaseUrl
        })

        await newProduct.save((err, newProduct) => {
            if (err) return console.error(err);
        })
        console.log("new product", newProduct)

        res.status(201).render('index', { msg: "Producto creado" })

    } catch (err) {
        console.log(err)
        res.status(400).json({ msg: "Product save failed" })
    }


    // guardar producto en mongoDB


    // guardar archivo en cloud storage
    // mensaje confirmando guardado exitoso


}


const controllers = {
    getIndexView,
    getProducts,
    saveNewProduct
}

module.exports = controllers;