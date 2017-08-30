// features/step_definitions/browser_steps.js
var {until, By} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  When('I go to the login page', function() {
    return this.driver.get('http://localhost:3000/login.html');
  });

  Then("I should see a {string} form", function(id) {
    return new Promise((resolve) => {
    this.driver.wait(until.elementLocated(By.css(`#${id}`)));
    this.driver.findElements(By.css('m#${id}'))
      .then(function(elements) {
        expect(elements.length).to.equal(1)
        resolve()
      });
    })
  });

   Then("I should see a {string} input", function(id) {
      this.driver.wait(until.elementLocated(By.css('form#${id}')));
      this.driver.findElements(By.css('form#${id}'))
        .then(function(elements) {
          expect(elements.length).to.equal(1)
          callback()
      })
        .catch(function() {
          callback(null, 'failed')
        })
 });

   

  


});

// 