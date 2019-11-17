$(document).ready(function() {
    // #1 Make a button appear on the page when it's first loaded. 
    //The button cannot already be in your html. When the button is clicked,
    //you should display an Alert box with any (nice) message.

    let $button1 = $('<button></button>');
    let $btn1Text = 'Click Here';
    
    $($button1).append($btn1Text);
    $('body').append($button1);
    $($button1).click(function() {
        alert('Hey how are you?');
    });
    // #2 Make a button and text box (you can just put them in your HTML). 
    //When the button is clicked, display an alert with the message that is typed in the text box.

    $('#btn2').click(function() {
        function alertValue() {
            alert($('input').val());
        }
        $('input').change(alertValue);
        alert($(':input[type="text"]').val());
        $("form").trigger("reset");
    });
    // #3 Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it.
    // The div should return to its original color when the mouse exits the div.

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

    // #4 Put some text in a paragraph. Make it where when you click on the paragraph, 
    //the color of the text switches to red. Once you get that working, 
    //try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
    
    let $paraOne = $('<p>');
    let $paraText = 'This is the text in a paragragh';

    $($paraOne).append($paraText);
    $('body').append($paraOne);


    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r},${g},${b})`;
        return color;
    }

    $($paraOne).click(function (e) {
        e.target.style.color = randomColor();
    });

    // #5 Add a button and an empty div. When the button is clicked, 
    //add a span that contains your name to the empty div.

    let b = $('#btn3');

    $(b).click(function() {
        let $divContainer = $('<div></div>');
        let $span = $('<span></span>');
        let $spanText = 'Byron Baldwin';
        $span.append($spanText);
        $divContainer.append($span);
        $('body').append($divContainer);
    });

    // #6 Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. 
    //If you don't have that many, include your imaginary ones). 
    //When the button is clicked, add each friend's name as an li to the ul on the page.

    let friends = [
        { name: 'Liz'},
        { name: 'Bo'},
        { name: 'Fain'},
        { name: 'Alan'},
        { name: 'Jacob'},
        { name: 'John'},
        { name: 'Margie'},
        { name: 'Katherine'},
        { name: 'Jim'},
        { name: 'Joe'}
    ];

    let $btn4 = $('#btn4');

    let $uList = $('#list');

    $btn4.click(function() {
        let i;

        for (i = 0; i < friends.length; i++) {
            let f = friends[i].name;

            let $list = $('<li></li>');
            let $listText = f;
            $list.append($listText);
            $uList.append($list);
        }
    })

     
});