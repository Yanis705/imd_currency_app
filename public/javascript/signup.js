document.querySelector(".signup").addEventListener('click', (e)=>{
    let email = document.querySelector('#email').value
    let password = document.querySelector('#pw').value
    let firstName = document.querySelector('#firstName').value
    let lastName = document.querySelector('#lastName').value

    fetch("http://localhost:3000/users/signup", { 
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
            //Redirect to index

            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location = '/';
        }
    })

    e.preventDefault();
})