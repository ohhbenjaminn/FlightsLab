const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    create,
    new: newTicket
};

function newTicket(res, req) {
    Flight.findById(req.param.id, function(err, flight) {
        res.render('tickets/new', {
            flight
        })
    })
};

function create(res, req) {
    Flight.findById(req.param.id, function(err, flight) {
        req.body.flight =  flight.id
        Ticket.create(req.body, function(err, ticket) {
            res.redirect(`/flights/${flight.id}`)
        })
    })
}