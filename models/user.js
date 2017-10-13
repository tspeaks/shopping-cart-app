const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  created: {type: Date, default: Date.now},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  zipcode: {type: String},
  phone: {type: String},
  email: {type: String},
  loggedIn: {}
});

userSchema.plugin(require('mongoose-bcrypt'));


userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username,
    address: this.address,
    city: this.city,
    state: this.state,
    zipcode: this.zipcode,
    phone: this.phone,
    email: this.email
  };
}

const User = mongoose.model('users', userSchema);

module.exports = User;
