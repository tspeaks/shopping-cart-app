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

