const Product = require('../models/products')

exports.create = (req, res)=> {
    let product = new Product ({
        name: req.body.name,
        price: req.body.price
    })

    product.save (err => {
        if (err)
            return next(err)
        res.send({status: "OK", message: "Product created succesfully"})
    })
}

exports.index = (req, res, next) => {
    Product.find({}, (err, products)=>{
        if (err)
            return next(err) 
        res.send(products)       
    } )
}

exports.show = (req, res, next) => {
    // Product.findById(req.params.id, (err, product) => {
    //     if (err)
    //         return next(err) 
    //     res.send(product)
    // } )
    Product.findById(req.params.id)
         .then(product => {
             if(product == null){
                 res.status(404).send({error: "product not found"})
             }else{
                 res.send(product)
             }
         }).catch (error => {
             res.status(500).send({error: error.message})
         })
}

exports.update = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err)=>{
        if (err)
            return next(err) 
        res.send({status: "OK", message: "Product updated succesfully"})
    } )
}

exports.delete = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if (err)
            return next(err) 
        res.send({status: "OK", message: "Product deleted succesfully"})
    })
}