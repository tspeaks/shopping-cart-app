Feature: My Cart
	

	Scenario: Remove product from cart
		Given that I am logged into my account
		And I am on the 'My Cart' page
		And I should see a 'thumbnail' 'image'
		And I should see a 'product'
		And I should see a product 'name' 
		And I should see a product 'price'
		And I should see a product 'amount toggle'
		And I should see a product 'order amount'
		And I should see a 'removeproduct' 'button'
		And I should see a 'checkout' 'button'
		And I should see a 'keepshopping' 'button'
		When I press 'removeproduct'
		Then the 'product' is removed
		And the 'total price' for all items in My Cart is appropriately adjusted


	Scenario: Keep Shopping
		Given that I am logged into my account
		And I am on the 'My Cart' page
		And I should see a 'thumbnail' 'image'
		And I should see a 'product'
		And I should see a product 'name' 
		And I should see a product 'price'
		And I should see a product 'amount toggle'
		And I should see a product 'order amount'
		And I should see a 'removeproduct' 'button'
		And I should see a 'checkout' 'button'
		And I should see a 'keepshopping' 'button'
		When I press 'keepshopping'
		Then I should be taken to 'View Products'

	Scenario: Go to Checkout
		Given that I am logged into my account
		And I am on the 'My Cart' page
		And I should see a 'thumbnail' 'image'
		And I should see a 'product'
		And I should see a product 'name' 
		And I should see a product 'price'
		And I should see a product 'amount toggle'
		And I should see a product 'order amount'
		And I should see a 'removeproduct' 'button'
		And I should see a 'checkout' 'button'
		And I should see a 'keepshopping' 'button'
		When I press 'checkout'
		Then I should be taken to 'Checkout'
		
