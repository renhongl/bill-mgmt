const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MaterialSchema = new Schema({
  content: String,
  name: String,
  phone: String,
  uni: String,
  teacher: String,
  price: String
});

const Material = Mongoose.model('Material', MaterialSchema);

module.exports = Material;
