Feature: View Product info

	Scenario: Add product to My Cart
		Given that I am logged in to my account
		And I am on the 'detailed product info' page
		And I should see a 'thumbnail' 'image'
		And I should see a product 'name' 
		And I should see a product 'price'
		And I should see a product 'amount toggle'
		And I should see a product 'description'
		And I should see a 'addproduct' 'button'
		When I press 'addproduct'
		Then I should be taken to 'My Cart'
		And an amount of the product equal to the amount toggle is added to My Cart


	
