let url = new URL(document.URL);
let path = url.pathname

let split = path.split("/");
let id = split[2];

fetch("/api/v1/transfers/" + id, {
    method: "get",
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },
}).then(response => {
    return response.json();
}).then(json => {
    console.log(json);
    document.querySelector(".from").innerHTML = json.data.transfer[0].from;
    document.querySelector(".to").innerHTML = json.data.transfer[0].to;
    document.querySelector(".amount").innerHTML = "$"+json.data.transfer[0].IMDollars;
    document.querySelector(".reason").innerHTML = json.data.transfer[0].reason;
    if(json.data.transfer[0].message){
        document.querySelector(".description").innerHTML = json.data.transfer[0].message;
    } else {
        document.querySelector(".description").innerHTML = "No description provided";
    }
    
}).catch(err => {
    console.log(err);
})