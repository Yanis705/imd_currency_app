$(document).ready(function () {
    // document.querySelector(".matchList").addEventListener('click', (e)=>{
    //     let option = document.querySelector('.autocomplete__username').innerHTML
    //     let inputBox = document.querySelector('#transactionTo')

    //     inputBox.value = option
    //     e.preventDefault();
    // })

    $('body').on('click', '.autocomplete__fullName', function () {
        let option = $(this).find(".autocomplete__username").html();

        let inputBox = document.querySelector('#transactionTo');
        inputBox.value = option;
        $(".autocomplete__fullName").remove();
    });
});