$( document ).ready(function() {

	//Log-In
	$("#login").submit(function (event) {
		const username = $('#username').val()
		event.preventDefault();
		console.log("i work");
		$.ajax( {
			method: 'POST',
			url: 'http://localhost:3000/sessions',
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
			$.cookie('token', res.token);
			$.cookie('username', username, { expires: 14 });
			window.location.replace('/dashboard.html');

		}).fail((err) => {
			$(".alert").show('fade');
			console.log(err);
		})
		

	});

//Collapse Alert and remove text when attempting additional logins

	$('#username').click(function () {
		$("#username").val("");
    	$(".alert").hide('fade');
	});

	$('#password').click(function () {
		$("#password").val("");
    	$(".alert").hide('fade');
	});
		
});