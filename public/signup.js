$( document ).ready(function() {

	//Signup
	$("#signup").submit(function (event) {
		const username = $('#username').val()
		event.preventDefault();
		console.log("i work");
		$.ajax( {
			method: 'POST',
			url: 'http://localhost:3000/users',
			data:JSON.stringify({
				username: username,
				password: $('#password').val()
			}),
			dataType: 'json',
			headers: {
				'Content-type': 'application/json'
			}


		})
		.then((res) => {
			console.log(res);
			window.location.replace('/login.html');

		}).fail((err) => {
			
			console.log(err);
		})


		

	});

		
});

