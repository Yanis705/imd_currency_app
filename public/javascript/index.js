fetch("/api/v1/transfers", {
    'headers': {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    console.log(json);
}).catch(err => {
    console.log("Unauthorized user!");
    localStorage.removeItem('token');
    window.location = '/login';
})