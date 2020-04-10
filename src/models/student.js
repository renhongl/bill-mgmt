const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  uni: {
    type: Schema.Types.ObjectId,
    ref: 'University'
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  phone: String
});

const Student = Mongoose.model('Student', StudentSchema);

module.exports = Student;
