$(document).ready(function () {
    $('body').on('click', '.autocomplete__fullName', function () {
        let option = $(this).find(".autocomplete__username").html();

        let inputBox = document.querySelector('#transactionTo');
        inputBox.value = option;
        $(".autocomplete__fullName").remove();
    });
});