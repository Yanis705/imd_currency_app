function appendLeaders() {
    fetch("http://localhost:3000/api/v1/leaderboard", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')

        },
    }).then(response => {
        return response.json();
    }).then(json => {
        console.log(json)
        json.data.users.forEach(user => {
            let place = "# 1";
            let fullName = user.firstName + " " + user.lastName;
            let transferCount = user.transferCount + " transfers";
            let balance = "$ " + user.balance;

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
            divTransaction.className = "transaction";

            divTransaction.appendChild(divTransactionPlace);
            divTransaction.appendChild(divTransactionInfo);
            divTransaction.appendChild(divTransactionAmount);

            let parent = document.querySelector(".leaderboard");
            parent.appendChild(divTransaction);
            
        })
    }).catch(err => {
        console.log(err);
    })
}
window.onload = appendLeaders();