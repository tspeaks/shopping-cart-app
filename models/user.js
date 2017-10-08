const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  created: {type: Date, default: Date.now},
  loggedIn: {}
});

userSchema.plugin(require('mongoose-bcrypt'));


userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username
  };
}

const User = mongoose.model('users', userSchema);

module.exports = User;
