$( document ).ready(function() {

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
			$.cookie('username', username, { expires: 14 });
			window.location.replace('/dashboard.html');

		}).fail((err) => {
			console.log(err);
		})


		

	});

		
});

