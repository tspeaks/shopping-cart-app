Feature: Dashboard]
	As a user
	I want to be able to log in to the app
	So that I can buy all the thingss
	
	Scenario: Landing on the dashboard after initial sign-up
		Given that I am logged in to my account
		When I am on the 'dashboard' page
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
		Then I am returned to my dashboard without the input fields
		And a confirmation email is sent to my email address
		And I see a message indicating that my profile is almost complete and that I must confirm my account creation via the confirmation email

	Scenario: Go to Products page from Dashboard
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have completed an initial profile on sign-up
		When I click on the link, "Products"
		Then I should be taken to the View all products page

	Scenario: Go to My Cart page for Dashboard
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have completed an initial profile on sign-up
		When I click on the link, "My Cart"
		Then I should be taken to the page for My Cart

	