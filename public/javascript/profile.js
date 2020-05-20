if (localStorage.getItem("token") !== null) {
    document.querySelector(".logout").addEventListener('click', (e)=>{
        localStorage.removeItem('token');
        window.location = '/login';
        e.preventDefault();
    })
} else {
    window.location = '/login';
}