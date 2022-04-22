var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res,next) {
  res.send(req.body.user);
})


router.get("/:name",function(req, res, next) {
  res.send('respond with user id: '+ req.params.name);
} )

module.exports = router;
