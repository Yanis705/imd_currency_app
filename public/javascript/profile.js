if (localStorage.getItem("token") !== null) {
    document.querySelector(".logout").addEventListener('click', (e) => {
        localStorage.removeItem('token');
        window.location = '/login';
        e.preventDefault();
    })

    fetch("/api/v1/leaderboard/current", {
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        document.querySelector(".firstName").innerHTML = "Yanis";
        document.querySelector(".lastName").innerHTML = json.data.user[0].lastName;
        document.querySelector(".email").innerHTML = json.data.user[0].username;
        document.querySelector(".balance").innerHTML = "$" + json.data.user[0].balance;
        document.querySelector(".transfers").innerHTML = json.data.user[0].transferCount;
    }).catch(err => {
        console.log(err);
    })
} else {
    window.location = '/login';
}