var express = require('express');
var router = express.Router();
const ProductController  = require("../controllers/products")
const schemas = require("../models/schemas")
const validate = require("../middleware/validate")
const auth = require("../middleware/auth")

/* GET users listing. */
router.post('/', auth, validate(schemas.product), ProductController.create);


module.exports = router