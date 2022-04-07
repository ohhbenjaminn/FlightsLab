const Flight = require('../models/flights');

module.exports = {
  show: showDetails,
  create
}

function showDetails(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
      flight,
      title: 'Flight Info'
    });
  });
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    console.log(flight)
    console.log(req.body)
    flight.destinations.push(req.body);
    flight.save(function(err) {
      console.log(err)
      res.redirect(`/flights/${flight._id}`);
    })
  })
}