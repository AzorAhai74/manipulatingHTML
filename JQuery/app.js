$(document).ready(function() {
    let $button1 = $("<button></button>");
    let $btn1Text = 'Click Here';
    
    $($button1).append($btn1Text);
    $('body').append($button1);
    $($button1).click(function() {
        alert('Hey how are you?');
    });
    
});