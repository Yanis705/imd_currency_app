const transactionTo=document.querySelector("#transactionTo"),matchList=document.querySelector(".matchList"),settings={headers:{Authorization:"Bearer "+localStorage.getItem("token")}},searchUsers=async t=>{const e=await fetch("../../api/v1/leaderboard",settings);let a=(await e.json()).data.users.filter(e=>{const a=new RegExp(`^${t}`,"gi");return e.firstName.match(a)||e.lastName.match(a)});0===t.length&&(a=[]),output(a)},output=t=>{if(t.length>0){const e=t.map(t=>`\n            <a class="autocomplete__fullName" href=""> ${t.firstName}  ${t.lastName} (<span class="autocomplete__username">${t.username}</span>)</a>\n        `).join("");matchList.innerHTML=e}};transactionTo.addEventListener("keyup",()=>searchUsers(transactionTo.value));