const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const UniversitySchema = new Schema({
  name: String,
  address: String,
});

const University = Mongoose.model('University', UniversitySchema);

module.exports = University;
