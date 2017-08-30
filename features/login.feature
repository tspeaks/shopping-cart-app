Feature: Login to app
	As a user
	I want to be able to log in to the app
	So that I can buy all the thingss

	Scenario: Valid Login
		Given I am already signed up
		When I go to the login page
		Then I should see a 'login' form
		And I should see a 'username' input
		And I should see a 'password' input
		And I should see a 'submit' button
		When I fill in a valid username
		And I fill in a valid password
		And I press submit
		Then I should be logged in
		And I should be taken to my user dashboard

	Scenario: Invalid Login
		Given I am already signed up
		When I go to the login page
		Then I should see a 'login' form
		And I shoud see a 'username' input
		And I should see a 'password' input
		And I should see a 'submit' button
		When I fill in an invalid username
		And I fill in an invalid password
		And I press submit
		Then I should see a message indicating that the username or password was incorrect
		And I should be returned to the login page