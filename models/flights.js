const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


//This is where schema goes
const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
      type: Date
    }
  });

  const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Jetblue', 'Alaska', 'Delta','United']
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
     },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
      required: true
    },
    departs: {
      type: Date
    },
    destinations:[ destinationSchema ]
 
 });


 module.exports = mongoose.model('Flight', flightSchema);
