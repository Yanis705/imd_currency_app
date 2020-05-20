fetch("http://localhost:3000/api/v1/history", {
    method: "get",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')

    },
}).then(result => {
    return result.json();
}).then(json => {
    console.log(json)
    json.data.transfers.forEach(transfer => {
        console.log(transfer);

        let ts = transfer.date;
        let date_ob = new Date(ts);

        let day = date_ob.getDate();
        let month = date_ob.getMonth();
        let sender = transfer.from;
        let receiver = transfer.to;
        let reason = transfer.reason;
        let amount = transfer.IMDollars;

        let link = document.createElement('a');
        link.setAttribute("href", "/");

        let transaction = document.createElement('div');
        transaction.className = "transaction";
        link.appendChild(transaction);

        let transactionDate = document.createElement('div');
        transactionDate.className = "transaction__date";
        transaction.appendChild(transactionDate);

        let transactionDay = document.createElement('p');
        transactionDay.className = "transaction__date--large";
        transactionDay.innerHTML = ("0" + (day)).slice(-2);;
        transactionDate.appendChild(transactionDay);

        let transactionMonth = document.createElement('p');
        transactionMonth.innerHTML = ("0" + (month)).slice(-2);
        transactionDate.appendChild(transactionMonth);

        let transactionInfo = document.createElement('div');
        transactionInfo.className = "transaction__info";
        transaction.appendChild(transactionInfo);

        let transactionName = document.createElement('p');
        transactionName.innerHTML = "Naam";
        transactionInfo.appendChild(transactionName);

        let transactionReason = document.createElement('p');
        transactionReason.className = "transaction__info--small";
        transactionReason.innerHTML = reason;
        transactionInfo.appendChild(transactionReason);

        let transactionAmount = document.createElement('div');
        transactionAmount.className = "transaction__amount";
        transactionAmount.innerHTML = amount;
        transaction.appendChild(transactionAmount);

        let parent = document.querySelector(".transactionHistory");
        parent.appendChild(link);

        console.log(sender);
        console.log(receiver);
    })

    let button = document.createElement('a');
    button.className = "btn";
    button.setAttribute("href", "transfer/history");
    button.innerHTML = "FULL HISTORY";

    let parent = document.querySelector(".transactionHistory");
    parent.appendChild(button);

}).catch(err => {
    console.log("Unauthorized user!");
    localStorage.removeItem('token');
    window.location = '/login';
})