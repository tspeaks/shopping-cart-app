const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  created: {type: Date, default: Date.now}
});


userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username
  };
}

const User = mongoose.model('users', userSchema);

module.exports = {User};
