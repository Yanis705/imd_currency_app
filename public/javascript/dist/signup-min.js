document.querySelector("#signup").addEventListener("click",e=>{let r=!0,t=document.querySelector("#email").value;var o=t.includes("@student.thomasmore.be");let n=document.querySelector("#pw").value,a=document.querySelector("#firstName").value,l=document.querySelector("#lastName").value;document.querySelector(".error.email").innerHTML="",document.querySelector(".error.password").innerHTML="",document.querySelector(".error.firstName").innerHTML="",document.querySelector(".error.lastName").innerHTML="",""==t?(r=!1,document.querySelector(".error.email").innerHTML="Email cannot be empty"):o||(r=!1,document.querySelector(".error.email").innerHTML="Email needs to be with @student.thomasmore.be"),""==n&&(r=!1,document.querySelector(".error.password").innerHTML="Password cannot be empty"),""==a&&(r=!1,document.querySelector(".error.firstName").innerHTML="First name cannot be empty"),""==l&&(r=!1,document.querySelector(".error.lastName").innerHTML="Last name cannot be empty"),r&&fetch("http://localhost:3000/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n,firstName:a,lastName:l})}).then(e=>e.json()).then(e=>{if("success"===e.status){let r=e.data.token;localStorage.setItem("token",r),window.location="/"}else"error"===e.status&&(document.querySelector(".error.general").innerHTML="This email is already in use")}),e.preventDefault()});