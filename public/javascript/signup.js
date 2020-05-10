var btnSignup = document.querySelector(".signup").addEventListener('click', ()=>{
    let username = document.querySelector('#email').value
    let password = document.querySelector('#pw').value

    fetch("http://localhost:3000/users/signup", { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(response=>{
        return response.json
    }).then(json=>{
        if (json.status === "success") {
            let feedback = document.querySelector('.alert')
            feedback.textContent = "Sign up complete!"
            window.location.href = "/views/index.pug"
        }
    })

})