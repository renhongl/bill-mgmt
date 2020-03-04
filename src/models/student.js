const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
});

const Student = Mongoose.model('Student', StudentSchema);

module.exports = Student;
