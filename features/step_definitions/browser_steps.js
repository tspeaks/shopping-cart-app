// features/step_definitions/browser_steps.js
require('dotenv').config();
var {until, By} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
var pages = {signup: 'http://localhost:3000/signup.html',
             dashboard: 'http://localhost:3000/dashboard.html',
             login: 'http://localhost:3000/login.html'}
defineSupportCode(function({Given, When, Then}) {
  Given("I am on the {string} page", function (page) {
          return this.driver.get(pages[page])    
         });

  When("I go to the login page", function() {
    return this.driver.get('http://localhost:3000/login.html');
  });

  Given("I go to the dashboard page", function() {
    return this.driver.get('http://localhost:3000/dashboard.html');
  });

  Then("I should see a {string} {string}", function(id, tag, callback) {
    this.driver.findElements(By.css(`${tag}#${id}`))
      .then(function(elements) {
        expect(elements.length).to.equal(1)
        callback()
      })
  });

  When("I fill in the {string} input with {string}", function (id, text, callback) {
           this.driver.findElement(By.css(`input#${id}`)).sendKeys(text)
           callback();
         });

When('I press {string}', function (type, callback) {
           this.driver.findElement(By.css(`#login>button`)).click();
           callback();
         });

 Then('I should be logged in', function (callback) {
           
           expect(this.driver.manage().getCookie('token')).not.to.be.null;
           callback();
         });

 Then('I should be taken to my user dashboard', function (callback) {
           this.driver.getCurrentUrl()
           .then((currentUrl) => {
              console.log("\n\n\n\n\n\n\n\n\n\n\n",currentUrl)
              expect(currentUrl).to.have.string('dashboard')
              callback();
           })
           .catch((err) => {
              console.log("\n\n\n\n\n\n\n",err);
           })
           
         });

Given('that I am logged in to my account', function (callback) {
     User.create({
      username: 'someguy',
      password: 'datpass'
     })
     .then(() => {
       return this.driver.get('http://localhost:3000/login.html');
      }).then(() => {
        return  this.driver.findElement(By.css(`input#username`)).sendKeys('someguy')
                
     
      }).then(() => {
         return this.driver.findElement(By.css(`input#password`)).sendKeys('datpass')
      
      }).then(() => {
        return this.driver.findElement(By.css(`#login>button`)).click();
      }).then(() => {
        callback();
      })

     });

Then('I am returned to my dashboard without the input fields', function (callback) {
      return this.driver.get('http://localhost:3000/dashboard.html');
    });


 });




   

  




// 