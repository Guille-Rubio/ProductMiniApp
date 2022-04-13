
const getIndexView = (req, res) => {
    res.status(200).render('index')
}

const getProducts = (req, res) => {
    res.status(200).render('index')
}



const controllers = {
    getIndexView,
    getProducts
}

module.exports = controllers;