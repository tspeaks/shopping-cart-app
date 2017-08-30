*/Feature: Detailed Product info

	Scenerio: Add product to My Cart
		Given I am logged into my account
		And I am on the detailed product info page
		And I see a thumbnail of the product 
		And I see the product's name 
		And I see the product's price
		And I see a amount toggle for the product
		And I see the product's description
		And I see a link to add the product to my cart
		When I click on the link to add a product to my cart
		Then I am taken to My Cart
		And an amount of the product equal to the amount toggle is added to My Cart

	Scenerio: Enlarge Thumbnail
		Given I am logged into my account
		And I am on the detailed product info page
		And I see a thumbnail of the product 
		And I see the product's name 
		And I see the product's price
		And I see a amount toggle for the product
		And I see the product's description
		And I see a link to add the product to my cart
		When I click on the product's thumbnail
		Then a window should appear with an enlarged image of the thumbnail*/
