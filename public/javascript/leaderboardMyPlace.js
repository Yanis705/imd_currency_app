function appendLeaders() {
    fetch("/api/v1/leaderboard/current", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')

        },
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json)
            let place = "You";
            let fullName = json.data.user[0].firstName + " " + json.data.user[0].lastName;
            let transferCount = json.data.user[0].transferCount + " transfers";
            let balance = "$ " + json.data.user[0].balance;

            let divTransactionPlace = document.createElement('div');
            divTransactionPlace.className = "transaction__place";
            divTransactionPlace.insertAdjacentHTML('beforeend', `${place}`);

            let divTransactionInfo = document.createElement('div');
            divTransactionInfo.className = "transaction__info";

            let pFullNameLeader = document.createElement('p');
            pFullNameLeader.className = "fullNameLeader";
            pFullNameLeader.innerHTML = `${fullName}`;

            let pTransactionCount = document.createElement('p');
            pTransactionCount.className = "transaction__count";
            pTransactionCount.innerHTML = `${transferCount}`;

            divTransactionInfo.appendChild(pFullNameLeader);
            divTransactionInfo.appendChild(pTransactionCount);

            let divTransactionAmount = document.createElement('div');
            divTransactionAmount.className = "transaction__amount";

            let pTransactionAmount = document.createElement('p');
            pTransactionAmount.className = "transaction__amount--positive";
            pTransactionAmount.innerHTML = `${balance}`;

            divTransactionAmount.appendChild(pTransactionAmount);

            let divTransaction = document.createElement('div');
            divTransaction.className = "transaction myPlace";

            divTransaction.appendChild(divTransactionPlace);
            divTransaction.appendChild(divTransactionInfo);
            divTransaction.appendChild(divTransactionAmount);

            let parent = document.querySelector(".leaderboard");
            parent.appendChild(divTransaction);
            
    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendLeaders();