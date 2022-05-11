const express = require('express');
const router = express.Router();
const ProductController  = require("../controllers/products");
const validate = require("../middleware/validate");
const schemas = require("../models/schemas");

/* GET users listing. */
router.post('/', validate(schemas.product), ProductController.create);

router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router