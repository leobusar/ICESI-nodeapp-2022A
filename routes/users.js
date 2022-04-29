var express = require('express');
var router = express.Router();
const schemas = require("../models/schemas")
const validate = require("../middleware/validate")
const user_controller = require("../controllers/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', validate(schemas.user), user_controller.create)
router.post('/login', user_controller.login)


router.get("/:name",function(req, res, next) {
  res.send('respond with user id: '+ req.params.name);
} )

module.exports = router;
