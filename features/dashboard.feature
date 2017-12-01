Feature: Dashboard]
	As a user
	I want to be able to log in to the app
	So that I can buy all the thingss
	
	Scenario: Landing on the dashboard after initial login
		Given that I am logged in to my account
		When I go to the dashboard page
		Then I should see a 'info' 'form'
		And I should see a 'address' 'input'
		And I should see a 'city' 'input'
		And I should see a 'state' 'input'
		And I should see a 'zipcode' 'input'
		And I should see a 'phone-number' 'input'
		And I should see a 'email' 'input'
		And I should see a 'submit' 'button'
		When I fill in the 'address' input with '123 Way'
		When I fill in the 'city' input with 'Basicville'
		When I fill in the 'state' input with 'Nebraskafornia'
		When I fill in the 'zipcode' input with '12345'
		When I fill in the 'phone-number' input with '012-345-6789'
		When I fill in the 'email' input with 'your@mom.com'
		And I press 'submit'
		


	