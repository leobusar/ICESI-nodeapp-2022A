var express = require('express');
var router = express.Router();
const ProductController  = require("../controllers/products")
const schemas = require("../models/schemas")
const validate = require("../middleware/validate")
const auth = require("../middleware/auth")

/* GET users listing. */
router.post('/', auth, validate(schemas.product), ProductController.create);
router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router