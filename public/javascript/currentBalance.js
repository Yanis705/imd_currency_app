let url = "https://imdollar-webtech3.herokuapp.com/";
//let url = "http://localhost:3000";

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

        let today = new Date();
        let newSchoolYear = new Date();
        newSchoolYear.setMonth(8);
        newSchoolYear.setDate(1);
    
        console.log(today)
        console.log(newSchoolYear)
        if(today == newSchoolYear){
            return fetch("/api/v1/leaderboard", {
                method: "put",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                return response.json();
            }).then(json => {
                console.log(json )
                document.querySelector(".currentBalanceNumber").innerHTML = "$ " + json.data.user.balance
            })
        } else {
            document.querySelector(".currentBalanceNumber").innerHTML = "$ " + json.data.user[0].balance
        }  
    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendBalance();