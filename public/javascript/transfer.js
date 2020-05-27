const fetchNode = require('node-fetch');

if (localStorage.getItem("token") !== null) {
    //let url = "https://imdollar-webtech3.herokuapp.com";
    let url = "http://localhost:3000";

    let primus = Primus.connect(url, {
        reconnect: {
            max: Infinity,
            min: 500,
            retries: 10
        }
    })

    document.querySelector("#newTransaction").addEventListener('click', (e) => {

        let transfer = true;

        document.querySelector('.error.general').innerHTML = "";
        document.querySelector('.error.to').innerHTML = "";
        document.querySelector('.error.amount').innerHTML = "";

        let to = document.querySelector('#transactionTo').value;
        let IMDollars = document.querySelector('#amount').value;
        let reason = document.querySelector('#reason').value;
        let message = document.querySelector('#message').value;

        if (to == "") {
            document.querySelector('.error.to').innerHTML = "This field cannot be empty";
            transfer = false;
        }

        if (IMDollars <= 0) {
            document.querySelector('.error.amount').innerHTML = "You have to send at least 1 IMDollar";
            transfer = false;
        }

        if (transfer) {
            fetch("/api/v1/transfers", {
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
                    if (document.querySelector('#slack').checked) {
                        console.log("checked!");
                        
                        const body = { a: 1 };
 
                        fetchNode('https://hooks.slack.com/services/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', {
                                method: 'post',
                                body: JSON.stringify({
                                    'text': `${to} has received ${IMDollars} IMDollars!`,
                                    'attachments': [{
                                        'color': '#202124',
                                        'fields': [{
                                            'title': 'Reason',
                                            'value': `${reason}`,
                                            'short': true
                                        }]
                                    }]
                            })
                            .then(response => {
                            primus.write({
                                "action": "update"
                            })
                            primus.write({
                                "action": "refreshLatestHistory",
                            });
                            primus.write({
                                "action": "refreshHistory"
                            })
                            window.location = '/transactionCompleted';
                        })
                    };
                    primus.write({
                        "action": "update"
                    })
                    primus.write({
                        "action": "refreshLatestHistory",
                    });
                    primus.write({
                        "action": "refreshHistory"
                    })

                } else if (json.status === "error") {
                    document.querySelector('.error.general').innerHTML = json.message;
                }
            }).catch(err => {
                console.log(err);
            })
        }
        e.preventDefault();
    })
} else {
    window.location = '/login';
}