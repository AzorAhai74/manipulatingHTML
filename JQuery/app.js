$(document).ready(function() {
    let $button1 = $("<button></button>");
    let submitBtn1 = $("#submitBtn1");
    let $btn1Text = 'Click Here';
    $('body').append($button1);
    $(submitBtn1).click(function() {
        alert($('Hello, how are you?').val());
    });
    
});