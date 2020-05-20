document.querySelector("#signup").addEventListener('click', (e) => {
    let register = true;
    let email = document.querySelector('#email').value;
    var stundentEmail = email.includes("@student.thomasmore.be");
    let password = document.querySelector('#pw').value;
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;

    document.querySelector('.error.email').innerHTML = "";
    document.querySelector('.error.password').innerHTML = "";
    document.querySelector('.error.firstName').innerHTML = "";
    document.querySelector('.error.lastName').innerHTML = "";

    if (email == "") {
        register = false;
        document.querySelector('.error.email').innerHTML = "Email cannot be empty";
    } else if (!stundentEmail) {
        register = false;
        document.querySelector('.error.email').innerHTML = "Email needs to be with @student.thomasmore.be";
    }

    if (password == "") {
        register = false;
        document.querySelector('.error.password').innerHTML = "Password cannot be empty";
    }

    if (firstName == "") {
        register = false;
        document.querySelector('.error.firstName').innerHTML = "First name cannot be empty";
    }

    if (lastName == "") {
        register = false;
        document.querySelector('.error.lastName').innerHTML = "Last name cannot be empty";
    }

    if (register) {
        fetch("/users/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "firstName": firstName,
                "lastName": lastName
            })
        }).then(response => {
            return response.json();
        }).then(json => {
            if (json.status === "success") {
                let token = json.data.token;
                localStorage.setItem("token", token);
                window.location = '/';
            } else if (json.status === "error") {
                document.querySelector('.error.general').innerHTML = "This email is already in use";
            }
        })
    }

    e.preventDefault();
})