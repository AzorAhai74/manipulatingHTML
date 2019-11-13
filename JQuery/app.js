$(document).ready(function() {
    let $button1 = $('<button></button>');
    let $btn1Text = 'Click Here';
    
    $($button1).append($btn1Text);
    $('body').append($button1);
    $($button1).click(function() {
        alert('Hey how are you?');
    });
    $('#btn2').click(function() {
        function alertValue() {
            alert($('input').val());
        }
        $('input').change(alertValue);
        alert($(':input[type="text"]').val());
        $("form").trigger("reset");
    });
    $('div').on('mouseover', function() {
        $(this).css({
            'background-color': 'yellow'
        });
    });
    $('div').on('mouseout', function() {
        $(this).css({
            'background-color': ''
        });
    });
    
    let $paraOne = $('<p>');
    let $paraText = 'This is the text in a paragragh';

    $($paraOne).append($paraText);
    $('body').append($paraOne);

    function clickPara () {
        $('p').on('click', function() {
            $(this).css({
                'color': 'red'
            });
        });
    };
    clickPara();
    
});