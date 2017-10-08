Feature: Sign-up
	As a user
	I want to be able to log in to the app
	So that I can buy all the thingss

	Scenario: Valid Sign-up
		Given I am on the 'signup' page
		Then I should see a 'login' 'form'
		And I should see a 'username' 'input'
		And I should see a 'password' 'input'
		And I should see a 'submit' 'button'
		When I fill in the 'username' input with 'someguy'
		And I fill in the 'password' input with 'datpass'
		And I press 'submit'
		Then am alerted that my account has been successfully created
		And the user with username 'someguy' is added to the database
		And I should be taken to my user dashboard

	Scenario: New invalid Sign-up (preexisting account)
		Given I am on the 'signup' page
		Then I should see a 'login' 'form'
		And I should see a 'username' 'input'
		And I should see a 'password' 'input'
		And I should see a 'submit' 'button'
		When I fill in the 'username' input with 'someguy'
		And I fill in the 'password' input with 'datpass'
		And I press 'submit'
		Then I am sent to the login page
		And I am alerted that an account with that username already exists
