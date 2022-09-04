const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add('slide-up')
		} else {
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add('slide-up')
		} else {
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});


  

function login() {
	const email = $('#txtEmail2')[0].value;
	const pass = $('#txtPass2')[0].value;
	$.get("http://localhost:3000/api/customer/login?email="+ email +"&password=" + pass, function (data) {
		if(data.mail != undefined) {
			localStorage.setItem("loggedUser", JSON.stringify(data));
			window.location.href = "index.html";
		}
	});
}

function signUp() {
	var customer= {
		"mail": $('#txtEmail1')[0].value,
        "name": $('#txtName')[0].value,
        "surname": $('#txtSurname')[0].value,
        "password":$('#txtPass1')[0].value
	};
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/api/customer',
		data: JSON.stringify(customer),
		success: function(data) { 
			alert(data);
			loginBtn.click();
		},
		contentType: "application/json",
		dataType: 'json'
	});
}