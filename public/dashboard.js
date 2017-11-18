$( document ).ready(function() {

const username = $.cookie('username');



if ($.cookie('token')) {
	$('#profile-modal').modal( {
		show: true
	});
	
}

//Dashboard form


	$("#info").submit(function (event) {
		event.preventDefault();
		$.ajax( {
			method: 'PUT',
			url: 'http://localhost:3000/users/',
			data:JSON.stringify({
				address: $('#address').val(),
				city: $('#city').val(),
				state: $('#state').val(),
				zipcode: $('#zipcode').val(),
				phone: $('#phone-number').val(),
				email: $('#email').val()
			}),
			dataType: 'json',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `bearer ${$.cookie('token')}`
			}

		})
		.then((res) => { 
			console.log(res);
			$('#profile-modal').modal("toggle");

		}).fail((err) => {
			console.log(err);
		})


		

	});

		


//Dashboard welcome
$(function () {

	$("#welcome").text("Welcome "+username+"!");

	})

});

//View Products

//Hat
const hat = {count:0, price: 10};
const onHatIncrease = function() {
	hat.count++;
}

const onHatDecrease  = function() {
	if(hat.count > 0) {
	hat.count--;
	}
	else {
		hat.count = 0;
	}


}
const getHatTotal =function() {
	return hat.price*hat.count;
}
//Hat Increment Button
$('#hatIncrease').click(function(){
    onHatIncrease();
    $("#hatCount").text(hat.count);
	$("#hatPrice").text("$" + getHatTotal());
});
//Hat Decrement Button
$('#hatDecrease').click(function(){
    onHatDecrease();
    $("#hatCount").text(hat.count);
    $("#hatPrice").text("$" + getHatTotal());
});
//Add Hat to Cart
$('#hatToCart').click(function() {
	$('#myCart').append(`<li>Hat</li>`);
})
//Shirt
const shirt = {count:0, price: 15};

const onShirtIncrease = function() {
	shirt.count++;
}
const onShirtDecrease  = function() {
	if(shirt.count > 0){
	shirt.count--;
	}
	else {
		shirt.count = 0;
	}
}
const getShirtTotal =function() {
	return shirt.price*shirt.count;
}
//Shirt Increment Button
$('#shirtIncrease').click(function(){
    onShirtIncrease();
    $("#shirtCount").text(shirt.count);
	$("#shirtPrice").text("$" + getShirtTotal());
});
//Shirt Decrement Button
$('#shirtDecrease').click(function(){
    onShirtDecrease();
    $("#shirtCount").text(shirt.count);
    $("#shirtPrice").text("$" + getShirtTotal());
});
//Add Shirt to Cart
$('#shirtToCart').click(function() {
	$('#myCart').append(`<li>Shirt</li>`);
})
//Hoodie
const hoodie = {count:0, price: 20};
const onHoodieIncrease = function() {
	hoodie.count++;
}

const onHoodieDecrease  = function() {
	if(hoodie.count > 0) {
	hoodie.count--;
	}
	else {
		hoodie.count = 0;
	}
}

const getHoodieTotal =function() {
	return hoodie.price*hoodie.count;
}
//Hoodie Increment Button
$('#hoodieIncrease').click(function(){
    onHoodieIncrease();
    $("#hoodieCount").text(hoodie.count);
	$("#hoodiePrice").text("$" + getHoodieTotal());
});
//Hoodie Decrement Button
$('#hoodieDecrease').click(function(){
    onHoodieDecrease();
    $("#hoodieCount").text(hoodie.count);
    $("#hoodiePrice").text("$" + getHoodieTotal());
});
//Add Hoodie to Cart
$('#hoodieToCart').click(function() {
	$('#myCart').append(`<li>Hoodie</li>`);
})
//Mug
const mug = {count:0, price: 10};
const onMugIncrease = function() {
	mug.count++;
}

const onMugDecrease  = function() {
	if(mug.count > 0){
	mug.count--;
	}
	else {
		mug.count = 0;
	}
}
const getMugTotal =function() {
	return mug.price*mug.count;
}
//Mug Increment Button
$('#mugIncrease').click(function(){
    onMugIncrease();
    $("#mugCount").text(mug.count);
	$("#mugPrice").text("$" + getMugTotal());
});
//Mug Decrement Button
$('#mugDecrease').click(function(){
    onMugDecrease();
    $("#mugCount").text(mug.count);
    $("#mugPrice").text("$" + getMugTotal());
});
//Add Mug to Cart
$('#mugToCart').click(function() {
	$('#myCart').append(`<li>Mug</li>`);
})
//Mousepad
const mousepad = {count:0, price: 20};
const onMousepadIncrease = function() {
	mousepad.count++;
}

const onMousepadDecrease = function() {
	if(mousepad.count > 0) {
	mousepad.count--;
	}
	else {
		mousepad.count = 0;
	}
}
const getMousepadTotal =function() {
	return mousepad.price*mousepad.count;
}
//Mousepad Increment Button
$('#mousepadIncrease').click(function(){
    onMousepadIncrease();
    $("#mousepadCount").text(mousepad.count);
	$("#mousepadPrice").text("$" + getMousepadTotal());
});
//Mousepad Decrement Button
$('#mousepadDecrease').click(function(){
    onMousepadDecrease();
    $("#mousepadCount").text(mousepad.count);
    $("#mousepadPrice").text("$" + getMousepadTotal());
});
//Add Mousepad to Cart
$('#mousepadToCart').click(function() {
	$('#myCart').append(`<li>Mousepad</li>`);
})
//Total
const totalPrice = function() {
	return getHatTotal() + getShirtTotal() +
	getHoodieTotal() + getMugTotal() +
	getMousepadTotal();
}

//My Cart
