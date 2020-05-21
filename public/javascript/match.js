const transactionTo = document.querySelector("#transactionTo");
const settings = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}

const searchUsers = async searchText => {
    const res = await fetch("../../api/v1/leaderboard", settings)
    const users = await res.json();
    //console.log(users)

    let matches = users.data.users.filter(user => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return user.firstName.match(regex) || user.lastName.match(regex);
    });
    //console.log(matches);
    //empty array when input is empty
    if(searchText.length === 0){
        matches = [];
    }

    output(matches);
}

const output = matches => {
    if(matches.length > 0){
        const info = matches
        .map(
            match => `
            <p class="autocomplete__fullName"> ${match.firstName}  ${match.lastName} (<span class="autocomplete__username">${match.username}</span>)</p>
        `)
       .join('');

        //matchList.innerHTML = info;
        $(".autocomplete__fullName").remove();
        $(info).insertAfter( "#transactionTo" );
    }
}


transactionTo.addEventListener('keyup', ()=> searchUsers(transactionTo.value));



