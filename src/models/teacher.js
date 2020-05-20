const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const TeacherSchema = new Schema({
  name: String,
  uni: {
    type: Schema.Types.ObjectId,
    ref: 'University'
  },
  phone: String,
  deleted: Boolean,
});

const Teacher = Mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
