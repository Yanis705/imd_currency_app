document.querySelector("#newTransaction").addEventListener("click",e=>{let r=!0;document.querySelector(".error.general").innerHTML="",document.querySelector(".error.to").innerHTML="",document.querySelector(".error.amount").innerHTML="";let t=document.querySelector("#transactionTo").value,o=document.querySelector("#amount").value,n=document.querySelector("#reason").value,a=document.querySelector("#message").value;""==t&&(document.querySelector(".error.to").innerHTML="This field cannot be empty",r=!1),o<=0&&(document.querySelector(".error.amount").innerHTML="You have to send at least 1 IMDollar",r=!1),r&&fetch("http://localhost:3000/api/v1/transfers",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({to:t,IMDollars:o,reason:n,message:a})}).then(e=>e.json()).then(e=>{"success"===e.status?window.location="/transactionCompleted":"error"===e.status&&(document.querySelector(".error.general").innerHTML=e.message)}),e.preventDefault()});