Feature: My Cart
	
	/*Scenerio: Toggle product amount up
		Given I am logged into my account
		And I am on the My Cart page
		And I see the product's in My Cart
		And I see the thumbnails of products in My Cart
		And I see the names of products in My Cart
		And I see the price of products in My Cart
		And I see the amounts selected for purchase of each product
		And I see the "+" button to the left of each product's amount
		And I see the "-" button to the left of each product's amount
		And I see the "X" button to remove each item from My Cart
		And I see the Checkout button
		And I see the Keep Shopping button
		And I see the Remove All Items button
		When I press the "+" button on a product
		Then the amount selected for purchase of that product is increased by one
		And the total price for all items in My Cart is appropriately adjusted*/

	/*Scenerio: Toggle product amount down
		Given I am logged into my account
		And I am on the My Cart page
		And I see the product's in My Cart
		And I see the thumbnails of products in My Cart
		And I see the names of products in My Cart
		And I see the price of products in My Cart
		And I see the amounts selected for purchase of each product
		And I see the "+" button to the left of each product's amount
		And I see the "-" button to the left of each product's amount
		And I see the "X" button to remove each item from My Cart
		And I see the Checkout button
		And I see the Keep Shopping button
		And I see the Remove All Items button
		When I press the "-" button on a product
		Then the amount selected for purchase of that product is reduced by one
		And the total price for all items in My Cart is appropriately adjusted*/

	Scenerio: Remove product from cart
		Given I am logged into my account
		And I am on the My Cart page
		And I see the product's in My Cart
		And I see the thumbnails of products in My Cart
		And I see the names of products in My Cart
		And I see the price of products in My Cart
		And I see the amounts selected for purchase of each product
		And I see the "+" button to the left of each product's amount
		And I see the "-" button to the left of each product's amount
		And I see the "X" button to remove each item from My Cart
		And I see the Checkout button
		And I see the Keep Shopping button
		And I see the Remove All Items button
		When I press the "X" button on a product
		Then that product is removed from My Cart
		And the total price for all items in My Cart is appropriately adjusted

	/*Scenerio: Remove All Products from cart
		Given I am logged into my account
		And I am on the My Cart page
		And I see the product's in My Cart
		And I see the thumbnails of products in My Cart
		And I see the names of products in My Cart
		And I see the price of products in My Cart
		And I see the amounts selected for purchase of each product
		And I see the "+" button to the left of each product's amount
		And I see the "-" button to the left of each product's amount
		And I see the "X" button to remove each item from My Cart
		And I see the Checkout button
		And I see the Keep Shopping button
		And I see the Remove All Items button
		When I press the Remove All Items button
		Then all products are removed from My Cart
		And the total price for all items in My Cart is appropriately adjusted*/

	Scenerio: Keep Shopping
		Given I am logged into my account
		And I am on the My Cart page
		And I see the product's in My Cart
		And I see the thumbnails of products in My Cart
		And I see the names of products in My Cart
		And I see the price of products in My Cart
		And I see the amounts selected for purchase of each product
		And I see the "+" button to the left of each product's amount
		And I see the "-" button to the left of each product's amount
		And I see the "X" button to remove each item from My Cart
		And I see the Checkout button
		And I see the Keep Shopping button
		And I see the Remove All Items button
		When I press the Keep Shopping button
		Then I should be taken to the View All Products page

	Scenerio: Go to Checkout
		Given I am logged into my account
		And I am on the My Cart page
		And I see the product's in My Cart
		And I see the thumbnails of products in My Cart
		And I see the names of products in My Cart
		And I see the price of products in My Cart
		And I see the amounts selected for purchase of each product
		And I see the "+" button to the left of each product's amount
		And I see the "-" button to the left of each product's amount
		And I see the "X" button to remove each item from My Cart
		And I see the Checkout button
		And I see the Keep Shopping button
		And I see the Remove All Items button
		When I press the Checkout button
		Then I should be taken to the Checkout page
		
