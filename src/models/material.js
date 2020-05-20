const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const MaterialSchema = new Schema({
  content: String,
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  uni: {
    type: Schema.Types.ObjectId,
    ref: 'University'
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  price: String,
  createTime: Date,
  pickUpTime: Date,
  deleted: Boolean,
});

const Material = Mongoose.model('Material', MaterialSchema);

module.exports = Material;
