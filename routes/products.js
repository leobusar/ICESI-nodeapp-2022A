var express = require('express');
var router = express.Router();
const ProductController  = require("../controllers/products")

/* GET users listing. */
router.post('/', ProductController.create);

module.exports = router