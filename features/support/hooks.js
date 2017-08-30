// features/step_definitions/hooks.js
var {defineSupportCode} = require('cucumber');

const mongoose = require('mongoose');
const {DATABASE_URL, PORT} = require('../../config');


mongoose.Promise = global.Promise;
global.expect = require('chai').expect;
defineSupportCode(function({Before, After}) {

  Before(function(_, callback) {
    mongoose.connect(DATABASE_URL, err => {
    	callback()
	})
  })


  After(function() {
    return this.driver.quit();
  });
});