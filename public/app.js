
// Login page form
$(function () {

	$("#login").submit(function (event) {
		event.preventDefault();
		console.log("i work");
		$.ajax( {
			method: 'POST',
			url: 'http://localhost:3000/sessions',
			data:JSON.stringify({
				username: $('#username').val(),
				password: $('#password').val()
			}),
			dataType: 'json',
			headers: {
				'Content-type': 'application/json'
			}


		})
		.then((res) => {
			$.cookie('token', res.token);
			window.location.replace('/dashboard.html')

		}).fail((err) => {
			console.log(err);
		})


		

	});

		
});

//Signup page form
$(function () {

	$("#signup").submit(function (event) {
		event.preventDefault();
		console.log("i work");
		$.ajax( {
			method: 'POST',
			url: 'http://localhost:3000/users',
			data:JSON.stringify({
				username: $('#username').val(),
				password: $('#password').val()
			}),
			dataType: 'json',
			headers: {
				'Content-type': 'application/json'
			}


		})
		.then((res) => {
			$.cookie('token', res.token);
			window.location.replace('/dashboard.html')

		}).fail((err) => {
			console.log(err);
		})


		

	});

		
});

//Signup page form
$(function () {

	$("#info").submit(function (event) {
		event.preventDefault();
		console.log("i work");
		console.log($.cookie('token'));
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
				'Authorization': `JWT ${$.cookie('token')}`
			}


		})
		.then((res) => { 
			$.cookie('token', res.token);

		}).fail((err) => {
			console.log(err);
		})


		

	});

		
});
