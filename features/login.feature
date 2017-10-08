Feature: Login to app
	As a user
	I want to be able to log in to the app
	So that I can buy all the thingss

	Scenario: Valid Login
		Given I am already signed up with the username 'someguy' and the password 'datpass'
		When I go to the login page
		Then I should see a 'login' 'form'
		And I should see a 'username' 'input'
		And I should see a 'password' 'input'
		And I should see a 'submit' 'button'
		When I fill in the 'username' input with 'someguy'
		And I fill in the 'password' input with 'datpass'
		And I press 'submit'
		Then I should be logged in
		

	Scenario: Invalid Login
		Given I am already signed up with the username 'someguy' and the password 'datpass'
		When I go to the login page
		Then I should see a 'login' 'form'
		And I should see a 'username' 'input'
		And I should see a 'password' 'input'
		And I should see a 'submit' 'button'
		When I fill in the 'username' input with 'notrealguy'
		And I fill in the 'password' input with 'notrealpass'
		And I press 'submit'
		Then I should see a message indicating that the 'username' or 'password' was incorrect
		