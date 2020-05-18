function appendBalance() {
    fetch("http://localhost:3000/api/v1/user/current", {
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json)

        document.querySelector(".currentBalanceNumber").innerHTML = "$ " + json.data.user[0].balance

    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendBalance();