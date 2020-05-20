document.querySelector(".matchList").addEventListener('click', (e)=>{
    let option = document.querySelector('.autocomplete__username').innerHTML
    let inputBox = document.querySelector('#transactionTo')

    inputBox.value = option
    e.preventDefault();
})