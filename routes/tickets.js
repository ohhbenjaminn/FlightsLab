var express = require('express');
var router = express.Router();
const ticketController = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketController.new);
router.post('/flights/:id/tickets/new', ticketController.create);

module.exports = router;