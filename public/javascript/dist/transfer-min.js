if(null!==localStorage.getItem("token")){let e="http://localhost:3000",t=Primus.connect(e,{reconnect:{max:1/0,min:500,retries:10}});document.querySelector("#newTransaction").addEventListener("click",e=>{let o=!0;document.querySelector(".error.general").innerHTML="",document.querySelector(".error.to").innerHTML="",document.querySelector(".error.amount").innerHTML="";let r=document.querySelector("#transactionTo").value,n=document.querySelector("#amount").value,c=document.querySelector("#reason").value,a=document.querySelector("#message").value;""==r&&(document.querySelector(".error.to").innerHTML="This field cannot be empty",o=!1),n<=0&&(document.querySelector(".error.amount").innerHTML="You have to send at least 1 IMDollar",o=!1),o&&fetch("/api/v1/transfers",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({to:r,IMDollars:n,reason:c,message:a})}).then(e=>e.json()).then(e=>{if("success"===e.status){if(document.querySelector("#slack").checked)return console.log("checked!"),fetch("https://hooks.slack.com/services/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",{method:"POST",body:JSON.stringify({text:`${r} has received ${n} IMDollars!`,attachments:[{color:"#202124",fields:[{title:"Reason",value:`${c}`,short:!0}]}]})});t.write({action:"update"}),t.write({action:"refreshLatestHistory"}),t.write({action:"refreshHistory"}),window.location="/transactionCompleted"}else"error"===e.status&&(document.querySelector(".error.general").innerHTML=e.message)}).catch(e=>{console.log(e)}),e.preventDefault()})}else window.location="/login";