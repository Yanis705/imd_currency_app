null!==localStorage.getItem("token")?fetch("/api/v1/leaderboard",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>e.json()).then(e=>{console.log(e);let t=0;e.data.users.forEach(e=>{let a="# "+(t+=1),n=e.firstName+" "+e.lastName,l=e.transferCount+" transfers",o="$ "+e.balance,c=document.createElement("div");c.className="transaction__place",c.insertAdjacentHTML("beforeend",`${a}`);let r=document.createElement("div");r.className="transaction__info";let d=document.createElement("p");d.className="fullNameLeader",d.innerHTML=`${n}`;let s=document.createElement("p");s.className="transaction__count",s.innerHTML=`${l}`,r.appendChild(d),r.appendChild(s);let i=document.createElement("div");i.className="transaction__amount";let m=document.createElement("p");m.className="transaction__amount--positive",m.innerHTML=`${o}`,i.appendChild(m);let p=document.createElement("div");p.className="transaction",p.appendChild(c),p.appendChild(r),p.appendChild(i),document.querySelector(".leaderboard").appendChild(p)})}).catch(e=>{console.log(e)}):window.location="/login";