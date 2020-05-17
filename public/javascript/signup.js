document.querySelector(".signup").addEventListener('click', (e)=>{
    let email = document.querySelector('#email').value
    let password = document.querySelector('#pw').value

    fetch("https://imdollar-webtech3.herokuapp.com/users/signup", { 
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
            //Redirect to index

            let token = json.data.token;
            localStorage.setItem("token", token);
            window.location = '/';
        }
    })

    e.preventDefault();
})