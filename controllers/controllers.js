const  Product = require('../models/product')

const getIndexView = (req, res) => {
    res.status(200).render('index')
}

const getProducts = (req, res) => {
    res.status(200).render('index')
}

const saveNewProduct = async (req, res) => {
   const {name, desciption, price} = req.body;

    

    //desestructurar req
    // guardar producto en mongoDB


    // guardar archivo en cloud storage
    // mensaje confirmando guardado exitoso

    console.log("body", req.file)


    res.status(201).render('index', { msg: "Producto creado" })
}


const controllers = {
    getIndexView,
    getProducts,
    saveNewProduct
}

module.exports = controllers;