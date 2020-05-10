document.querySelector(".logout").addEventListener('click', (e)=>{
    localStorage.removeItem('token');
    window.location = '/login';
    e.preventDefault();
})