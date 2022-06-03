let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PhoneSchema = new mongoose.Schema({
  name: String,
  description: String,
  year: Number,
  image: String,
  user: {type: Schema.ObjectId, ref: 'Phone'}
});


module.exports= mongoose.model('Phone', PhoneSchema);