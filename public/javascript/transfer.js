let url = "http://localhost:3000";

let primus = Primus.connect(url, {
    reconnect: {
        max: Infinity,
        min: 500,
        retries: 10
    }
})

document.querySelector("#newTransaction").addEventListener('click', (e)=>{
    let to = document.querySelector('#transactionTo').value;
    let IMDollars = document.querySelector('#amount').value;
    let reason = document.querySelector('#reason').value;
    let message = document.querySelector('#message').value;

    fetch("http://localhost:3000/api/v1/transfers", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            "to": to,
            "IMDollars": IMDollars,
            "reason": reason,
            "message": message,
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === "success") {
            primus.write({ "action": "update"})
            window.location = '/transactionCompleted';
        }
    })

    e.preventDefault();
})