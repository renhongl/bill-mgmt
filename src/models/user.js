const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  mail: String,
  avator: String,
  auth: Number,
  createDate: String,
  deleted: Boolean,
});

const User = Mongoose.model('User', userSchema);

module.exports = User;
