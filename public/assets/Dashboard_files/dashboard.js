$( document ).ready(function() {

//Username Cookie
const username = $.cookie('username');


//Shipping Info Modal
if ($.cookie('token')) {
	$('#profile-modal').modal({
		show: true,
		backdrop: 'static'
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
			$('#profile-modal').modal("hide");

		}).fail((err) => {
			console.log(err);
		})


		

	});

//Cancel My Account
	$("#remove").click(function (event) {
		event.preventDefault();
		$.ajax( {
			method: 'DELETE',
			url: 'http://localhost:3000/users/',
			dataType: 'json',
			headers: {
				'Content-type': 'application/json',
				'Authorization': `bearer ${$.cookie('token')}`
			}

		})
		.then((res) => { 
			$.removeCookie('token');
			$.removeCookie('username');
			console.log(res);
			console.log("see me");
			window.location.replace('/signup.html');

		}).fail((err) => {
			console.log(err);
			console.log("see me fail");
		})


		

	});

		


//Dashboard welcome
$(function () {

	$("#welcome").text("Welcome "+username+"!");

	})

});

//View Products

//Hat
const hat = {
	count:0,
	price: 10,
	name: "Hat",
	thumbnail: '../hat.jpg'
};
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
	$(".alert").hide('fade');
});
//Hat Decrement Button
$('#hatDecrease').click(function(){
    onHatDecrease();
    $("#hatCount").text(hat.count);
    $("#hatPrice").text("$" + getHatTotal());
});

//Shirt
const shirt = {
	count:0,
	price: 15,
	name: "Shirt",
	thumbnail: '../shirt.jpg'
};

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
	$(".alert").hide('fade');
});
//Shirt Decrement Button
$('#shirtDecrease').click(function(){
    onShirtDecrease();
    $("#shirtCount").text(shirt.count);
    $("#shirtPrice").text("$" + getShirtTotal());
});

//Hoodie
const hoodie = {
	count:0, 
	price: 20,
	name: "Hoodie",
	thumbnail: '../hoodie.jpg'
};
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
	$(".alert").hide('fade');
});
//Hoodie Decrement Button
$('#hoodieDecrease').click(function(){
    onHoodieDecrease();
    $("#hoodieCount").text(hoodie.count);
    $("#hoodiePrice").text("$" + getHoodieTotal());
});

//Mug
const mug = {
	count:0, 
	price: 10,
	name: "Mug",
	thumbnail: '../mug.jpg'
};
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
	$(".alert").hide('fade');
});
//Mug Decrement Button
$('#mugDecrease').click(function(){
    onMugDecrease();
    $("#mugCount").text(mug.count);
    $("#mugPrice").text("$" + getMugTotal());
});

//Mousepad
const mousepad = {
	count:0, 
	price: 20,
	name: "Mousepad",
	thumbnail: '../mousepad.jpg'
};
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
	$(".alert").hide('fade');
});
//Mousepad Decrement Button
$('#mousepadDecrease').click(function(){
    onMousepadDecrease();
    $("#mousepadCount").text(mousepad.count);
    $("#mousepadPrice").text("$" + getMousepadTotal());
});

//Total
const totalPrice = function() {
	return getHatTotal() + getShirtTotal() +
	getHoodieTotal() + getMugTotal() +
	getMousepadTotal();
}

//Checkout Button
$('#checkout').click(function() {
	if(hat.count==0 && shirt.count==0 && hoodie.count==0 && mug.count==0 && mousepad.count==0) {
		$(".alert").show('fade');
	} else {
	sessionStorage.hat = JSON.stringify(hat);
	sessionStorage.shirt = JSON.stringify(shirt);
	sessionStorage.hoodie = JSON.stringify(hoodie);
	sessionStorage.mug = JSON.stringify(mug);
	sessionStorage.mousepad = JSON.stringify(mousepad);
	window.location.replace('/checkout.html');
	}
})
