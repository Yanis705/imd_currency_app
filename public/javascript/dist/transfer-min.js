if(null!==localStorage.getItem("token")){let e="http://localhost:3000",t=Primus.connect(e,{reconnect:{max:1/0,min:500,retries:10}});document.querySelector("#newTransaction").addEventListener("click",e=>{let r=!0;document.querySelector(".error.general").innerHTML="",document.querySelector(".error.to").innerHTML="",document.querySelector(".error.amount").innerHTML="";let o=document.querySelector("#transactionTo").value,n=document.querySelector("#amount").value,a=document.querySelector("#reason").value,c=document.querySelector("#message").value;""==o&&(document.querySelector(".error.to").innerHTML="This field cannot be empty",r=!1),n<=0&&(document.querySelector(".error.amount").innerHTML="You have to send at least 1 IMDollar",r=!1),r&&fetch("/api/v1/transfers",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({to:o,IMDollars:n,reason:a,message:c})}).then(e=>e.json()).then(e=>{"success"===e.status?(t.write({action:"update"}),t.write({action:"refreshLatestHistory"}),t.write({action:"refreshHistory"}),window.location="/transactionCompleted"):"error"===e.status&&(document.querySelector(".error.general").innerHTML=e.message)}),e.preventDefault()})}else window.location="/login";