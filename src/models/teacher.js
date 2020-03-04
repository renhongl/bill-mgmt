const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const TeacherSchema = new Schema({
  name: String,
});

const Teacher = Mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
