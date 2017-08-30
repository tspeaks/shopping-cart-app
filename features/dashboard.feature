Feature: Dashboard
	
	Scenerio: Landing on the dashboard after initial sign-up
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have not completed an initial profile on sign-up
		And I see an input field for my street address
		And I see an input field for my city
		And I see an input field for my state
		And I see an input field for my zipcode
		And I see an input field for my phone number
		And I see an input for my email address
		And I see a submit button
		When I enter my street address
		And I enter my city
		And I enter my state
		And I enter my zipcode
		And I enter my phone number
		And I enter my email address
		And I hit submit
		Then I am returned to my dashboard without the input fields
		And a confirmation email is sent to my email address
		And I see a message indicating that my profile is almost complete and that I must confirm my account creation via the confirmation email

	/*Scenerio: Leaving the dashboard without completing the intitial profile
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have not completed an initial profile on sign-up
		And I see an input field for my street address
		And I see an input field for my city
		And I see an input field for my state
		And I see an input field for my zipcode
		And I see an input field for my phone number
		And I see an input for my email address
		And I see a submit button
		When I leave the dashboard
		Then I am alerted that if I do not complete the initial profile I will be unable to purchase anything.*/

	Scenerio: Go to Products page from Dashboard
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have completed an initial profile on sign-up
		When I click on the link, "Products"
		Then I should be taken to the View all products page

	Scenerio: Go to My Cart page for Dashboard
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have completed an initial profile on sign-up
		When I click on the link, "My Cart"
		Then I should be taken to the page for My Cart

	/*Scenerio: Edit my profile information
		Given that I am logged in to my account
		And I am on my dashboard page
		And I have completed an initial profile on sign-up
		When I click on the link to edit my profile information
		Then I should see a new input field for my street address
		And it is populated with my current street address as a placeholder
		And I see a new input field for my city
		And it is populated with my current city as a placeholder
		And I see a new input field for my state
		And it is populated with my current state as a placeholder
		And I see a new input field for my zipcode
		And it is populated with my current zipcode as a placeholder
		And I see a new input field for my phone number
		And it is populated with my current phone number as a placeholder
		And I see a new input for my email address
		And it is populated with my current email address as a placeholder
		And I see a submit button
		When I hit submit
		Then I should return the dashboard to it's pre-edit profile state
		And be alerted that my profile has been updated*/

