document.querySelector(".login").addEventListener('click', (e) => {
    let checkLogin = true;
    let email = document.querySelector('#email').value;
    var stundentEmail = email.includes("@student.thomasmore.be");
    let password = document.querySelector('#pw').value;

    document.querySelector('.error.email').innerHTML = "";
    document.querySelector('.error.password').innerHTML = "";

    if (email == "") {
        checkLogin = false;
        document.querySelector('.error.email').innerHTML = "Email cannot be empty";
    } else if (!stundentEmail) {
        checkLogin = false;
        document.querySelector('.error.email').innerHTML = "Email needs to be with @student.thomasmore.be";
    }

    if (password == "") {
        checkLogin = false;
        document.querySelector('.error.password').innerHTML = "Password cannot be empty";
    }

    if (checkLogin) {
        fetch("/users/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            if (json.status === "success") {
                let token = json.data.token;
                localStorage.setItem("token", token);
                window.location = '/';
            } else {
                document.querySelector('.error').innerHTML = "Invalid login credentials";
            }
        })
    }

    e.preventDefault();
})