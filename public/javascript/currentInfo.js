function appendInfo() {
    fetch("/api/v1/leaderboard/current", {
        method: "get",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json)

        document.querySelector(".fullName").innerHTML = json.data.user[0].firstName + " " + json.data.user[0].lastName

    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendInfo();