function appendLeaders(){fetch("http://localhost:3000/api/v1/leaderboard",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>e.json()).then(e=>{console.log(e),e.data.users.forEach(e=>{let a=e.firstName+" "+e.lastName,t=e.transferCount+" transfers",n="$ "+e.balance,o=document.createElement("div");o.className="transaction__place",o.insertAdjacentHTML("beforeend","# 1");let l=document.createElement("div");l.className="transaction__info";let c=document.createElement("p");c.className="fullNameLeader",c.innerHTML=`${a}`;let d=document.createElement("p");d.className="transaction__count",d.innerHTML=`${t}`,l.appendChild(c),l.appendChild(d);let r=document.createElement("div");r.className="transaction__amount";let s=document.createElement("p");s.className="transaction__amount--positive",s.innerHTML=`${n}`,r.appendChild(s);let i=document.createElement("div");i.className="transaction",i.appendChild(o),i.appendChild(l),i.appendChild(r),document.querySelector(".leaderboard").appendChild(i)})}).catch(e=>{console.log(e)})}window.onload=appendLeaders();