// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

const { User } = require('../../models/user')

defineSupportCode(function({Given, When, Then}) {
  Given('I am already signed up', function (callback) {
   User.create({
   	 username: 'test-user',
   	 password: 'asdf12345'
   })
   .then(() => callback())
 });

});