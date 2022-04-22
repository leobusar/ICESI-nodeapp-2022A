const Product = require('../models/products')

exports.create = (req, res)=> {
    let product = new Product ({
        name: req.body.name,
        price: req.body.price
    })

    product.save (err => {
        if (err)
            return next(err)
        res.send("Product create succesfully")
    })
}