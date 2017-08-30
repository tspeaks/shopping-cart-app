Feature: Sign-up

	Scenerio: New valid Sign-up
		Given I am on the sign-up page
		And I see the username input
		And I see the password input
		And I see a confirm password input
		And I see the submit button
		When I enter a new username
		And I enter a new password
		And I enter a matching password in the confirm password input
		And I press submit
		Then am alerted that my account has been successfully created
		And I should be taken to my user dashboard

	/*Scenerio: New invalid Sign-up (preexisting account)
		Given I am on the sign-up page
		And I see the username input
		And I see the password input
		And I see the confirm password input
		And I see the submit button
		When I enter the username for a preexisting account
		And I enter its associated password
		And I enter a matching password in the confirm password input
		And I press submit
		Then I am sent to the login page
		And I am alerted that an account with that username already exists*/

	/*Scenerio: New invalid Sign-up (password mismatch)
		Given I am on the sign-up page
		And I see the username input
		And I see the password input
		And I see the confirm password input
		And I see the submit button
		When I enter a new username
		And I enter a new password
		And I enter a mismatching password in the confirm password input
		And I press submit
		Then I should be returned to the sign-up page with all fields erased
		And I am alerted that the passwords do not match.*/

		**Login if preexisting account