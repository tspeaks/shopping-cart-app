Feature: View Products
	
	*/Scenerio: Go to detailed product info page via thumbnail
		Given I am logged into my account
		And I am on the products page
		And I see a thumbnail of each product
		And I see each product's name
		And I see each product's price
		And I see a amount toggle for each product
		And I see a link to add each product to my cart
		When I click on a product's thumbnail
		Then I am taken to the detailed product info for that product*/

	*/Scenerio: Go to detailed product info page via product name
		Given I am logged into my account
		And I am on the products page
		And I see a thumbnail of each product
		And I see each product's name
		And I see each product's price
		And I see a amount toggle for each product
		And I see a link to add each product to my cart
		When I click on a product's name
		Then I am taken to the detailed product info for that product*/

	Scenerio: Add product to My Cart
		Given I am logged into my account
		And I am on the products page
		And I see a thumbnail of each product
		And I see each product's name
		And I see each product's price
		And I see each product's description
		And I see a amount toggle for each product
		And I see a link to add each product to my cart
		When I click on the link to add a product to my cart
		Then I am taken to My Cart
		And an amount of the product equal to the amount toggle is added to My Cart

	/*Scenerio: Enlarge Thumbnail
		Given I am logged into my account
		And I am on the view products page
		And I see a thumbnail of each product
		And I see each product's name
		And I see each product's price
		And I see a amount toggle for each product
		And I see a link to add each product to my cart
		When I click on a product's thumbnail
		Then a window should appear with an enlarged image of the thumbnail*/



