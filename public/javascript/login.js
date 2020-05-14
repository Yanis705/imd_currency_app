document.querySelector(".login").addEventListener('click', (e)=>{
    let email = document.querySelector('#email').value
    let password = document.querySelector('#pw').value

    fetch("http://localhost:3000/users/login", { 
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
            console.log("Can't login");
        }
    })

    e.preventDefault();
})