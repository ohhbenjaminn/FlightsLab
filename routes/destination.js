var express = require('express');
var router = express.Router();
const destinationController = require('../controllers/destination');

router.get('/flights/:id', destinationController.show);
router.post('/flights/:id', destinationController.create);

module.exports = router;
