$( document ).ready(function() {

	//Retrieve Products to Purchase (from dashboard.js)
	let hat, shirt, hoodie, mug, mousepad;
		function initialize() {
			hat = JSON.parse(sessionStorage.hat);
			shirt = JSON.parse(sessionStorage.shirt);
			hoodie = JSON.parse(sessionStorage.hoodie);
			mug = JSON.parse(sessionStorage.mug);
			mousepad = JSON.parse(sessionStorage.mousepad);
			console.log(hat, shirt, hoodie, mug, mousepad);
		}
		initialize();

	//Hats in Checkout
	if(hat.count > 0) {
		$('#hatThumbnail').html(`<img src="${hat.thumbnail}">`);
		$('#hatName').text(hat.name);
		$('#hatCount').text(hat.count);
		$('#hatPrice').text(hat.price * hat.count);
		$('#hatRemove').click(function() {
			$('#checkoutHat').remove();
			update();
		})
	} else {
		$('#checkoutHat').remove();
	}

	//Shirts in Checkout
	if(shirt.count > 0) {
		$('#shirtThumbnail').html(`<img src="${shirt.thumbnail}">`);
		$('#shirtName').text(shirt.name);
		$('#shirtCount').text(shirt.count);
		$('#shirtPrice').text(shirt.price * shirt.count);
		$('#shirtRemove').click(function() {
			$('#checkoutShirt').remove();
			update();
		})
	} else {
		$('#checkoutShirt').remove();
	}

	//Hoodies in Checkout
	if(hoodie.count > 0) {
		$('#hoodieThumbnail').html(`<img src="${hoodie.thumbnail}">`);
		$('#hoodieName').text(hoodie.name);
		$('#hoodieCount').text(hoodie.count);
		$('#hoodiePrice').text(hoodie.price * hoodie.count);
		$('#hoodieRemove').click(function() {
			$('#checkoutHoodie').remove();
			update();
		})
	} else {
		$('#checkoutHoodie').remove();
	}

	//Mugs in Checkout
	if(mug.count > 0) {
		$('#mugThumbnail').html(`<img src="${mug.thumbnail}">`);
		$('#mugName').text(mug.name);
		$('#mugCount').text(mug.count);
		$('#mugPrice').text(mug.price * mug.count);
		$('#mugRemove').click(function() {
			$('#checkoutMug').remove();
			update();
		})
	} else {
		$('#checkoutMug').remove();
	}

	//Mousepads in Checkout
	if(mousepad.count > 0) {
		$('#mousepadThumbnail').html(`<img src="${mousepad.thumbnail}">`);
		$('#mousepadName').text(mousepad.name);
		$('#mousepadCount').text(mousepad.count);
		$('#mousepadPrice').text(mousepad.price * mousepad.count);
		$('#mousepadRemove').click(function() {
			$('#checkoutMousepad').remove();
			update();
		})
	} else {
		$('#checkoutMousepad').remove();
	}

	//If All Products are Removed return to Dashboard
	function update() {
		if ($('#checkoutTable .product').length === 0) {

		alert('You cannot check out without selecting any products to purchase');
        window.location.replace('/dashboard.html');
	}
}

	//Proceed with Checkout
	$('#purchase').click(function() {
		window.location.replace('/dashboard.html');
	})
})

