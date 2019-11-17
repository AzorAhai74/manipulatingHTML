window.addEventListener('DOMContentLoaded', function() {
    // #1 Make a button appear on the page when it's first loaded. The button cannot already be in your html. 
    //When the button is clicked, you should display an Alert box with any (nice) message.
    
    let btn = document.createElement('button');
    btn.className = 'button1';
    let button1 = document.getElementsByClassName('button');
    btn.class = button1;
    let buttonText = document.createTextNode('Click Here');
    btn.appendChild(buttonText);
    document.body.appendChild(btn);

    btn.addEventListener('click',function() {
        alert('Hello, I hope you are doing well today');
    });

    // #2 Make a button and text box (you can just put them in your HTML). 
    //When the button is clicked, display an alert with the message that is typed in the text box.

    document.getElementById('btn2').addEventListener('click', function() {
        alert(document.getElementById('message').value);
    });

    // #3 Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it.
    // The div should return to its original color when the mouse exits the div.

    document.getElementById('message1').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'yellow';
    });

    document.getElementById('message1').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = '';
    });

    // #4 Put some text in a paragraph. Make it where when you click on the paragraph, 
    //the color of the text switches to red. Once you get that working, 
    //try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).

    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r},${g},${b})`;
        return color;
    }

    document.getElementById('paraOne').addEventListener('click', function(e) {
        e.target.style.color = randomColor();
    });

    // #5 Add a button and an empty div. When the button is clicked,
    // add a span that contains your name to the empty div.

    document.getElementById('btn3').addEventListener('click', function() {
        let divContainer = document.createElement('div');
        let span = document.createElement('span');
        let spanText = document.createTextNode('Byron Baldwin');
        span.appendChild(spanText);
        divContainer.appendChild(span);
        document.body.appendChild(divContainer);
    });

    // #6 Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). 
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


    document.getElementById('btn4').addEventListener('click', function() {
        let i;

        for (i = 0; i < friends.length; i++) {
            let f = friends[i].name;

            let list = document.createElement('li');

            let listText = document.createTextNode(f);
            list.appendChild(listText);

            document.getElementById('list').appendChild(list);
        }
    });


});

