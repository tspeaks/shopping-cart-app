// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

const User = require('../../models/user')

defineSupportCode(function({Given, When, Then}) {
  Given('I am already signed up with the username {string} and the password {string}', function (username, password, callback) {
   User.create({
   	 username: username,
   	 password: password
   })
   .then(() => callback())
 });

});