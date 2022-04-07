const Flight = require('../models/flights');
const Ticket  = require('../models/tickets');

module.exports = {
    index,
    new: newFlights,
    show,
    create, 
};

//This is where the functions run
//This one is for home screen/all flights, index  //views/flights/index
function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) console.log(err)
        res.render("flights/index", {
            flights,
            title: "All Flights",
        });
    });
};

//this one is for adding, /new  //views/flights/new
function newFlights(req, res) {
    res.render('flights/new', {title: 'Add a Flight'});
}


//This one is for create  //views/flights/create
function create(req,res) {
    req.body.departs = 
    new Date(new Date().setFullYear(new Date().getFullYear() + 1)); 
    Flight.create(req.body, function(err,flight){
        if (err) return res.redirect('flights/new');
        res.redirect('flights')
    });
}

//This one is for showing details //views/flights/show
function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({ flight: flight._id }, function(err, ticket) {
			res.render('flights/show', {
				flights: flight,
				ticket,
                title: 'Flight Details'
			});
		});
	});
}
