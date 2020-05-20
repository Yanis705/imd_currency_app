fetch("/api/v1/transferHistory",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(e=>e.json()).then(e=>{console.log(e),e.data.transfers.forEach(t=>{let a=t.date,n=new Date(a),o=n.getDate(),r=n.getMonth(),l=t.from,c=t.to,s=t.reason,i=t.IMDollars,d=document.createElement("a");d.setAttribute("href","/");let m=document.createElement("div");m.className="transaction",d.appendChild(m);let p=document.createElement("div");p.className="transaction__date",m.appendChild(p);let u=document.createElement("p");u.className="transaction__date--large",u.innerHTML=("0"+o).slice(-2),p.appendChild(u);let h=document.createElement("p");h.innerHTML=("0"+r).slice(-2),p.appendChild(h);let _=document.createElement("div");_.className="transaction__info",m.appendChild(_);let g=document.createElement("p");e.data.user.username==l?g.innerHTML=c:e.data.user.username!==l&&(g.innerHTML=l),_.appendChild(g);let C=document.createElement("p");C.className="transaction__info--small",C.innerHTML=s,_.appendChild(C);let E=document.createElement("div");E.className="transaction__amount",m.appendChild(E);let H=document.createElement("p");e.data.user.username==l?(H.innerHTML="-$"+i,H.className="transaction__amount--negative"):e.data.user.username!==l&&(H.innerHTML="+$"+i,H.className="transaction__amount--positive"),E.appendChild(H),document.querySelector(".transactionHistory").appendChild(d)})}).catch(e=>{console.log("Unauthorized user!"),localStorage.removeItem("token"),window.location="/login"});