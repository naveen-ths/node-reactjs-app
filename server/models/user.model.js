var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: false, max: 100 },
  gravatar: { type: String, required: false },
  organization: { type: String, required: false, max: 100 },
  country: { type: String, required: false, max: 100 }
});

module.exports = mongoose.model('User', UserSchema);
