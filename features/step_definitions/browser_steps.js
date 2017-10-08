// features/step_definitions/browser_steps.js
var {until, By} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var pages = {signup: 'http://localhost:3000/signup.html'}
defineSupportCode(function({Given, When, Then}) {
  Given("I am on the {string} page", function (page, callback) {
          return this.driver.get(pages[page])
           callback();
          
         });

  When("I go to the login page", function() {
    return this.driver.get('http://localhost:3000/login.html');
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
           this.driver.findElement(By.css("button[type='{type}'")).click()
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


 });




   

  




// 