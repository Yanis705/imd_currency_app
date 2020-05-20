let url = "http://localhost:3000";

let primus = Primus.connect(url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

primus.on("data", (json) => {
    console.log(json)
    if (json.action === "update") {
        appendBalance();
    }
})

function appendBalance() {
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

        document.querySelector(".currentBalanceNumber").innerHTML = "$ " + json.data.user[0].balance

    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendBalance();