var express = require('express');
// const { get } = require('express/lib/response');
var router = express.Router();
const flightsController = require('../controllers/flights');

/* GET users listing. */

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//This is for  /flights
router.get('/', flightsController.index)
//This is for /flights/new
router.get('/new', flightsController.new);
//This is for /flights/
router.get('/:id', flightsController.show);
//This is for POST aka creating 
router.post('/', flightsController.create);

module.exports = router;
