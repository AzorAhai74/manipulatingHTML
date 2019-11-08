window.addEventListener('DOMContentLoaded', function() {
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

    document.getElementById('btn2').addEventListener('click', function() {
        alert(document.getElementById('message').value);
    });

    document.getElementById('message1').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'yellow';
    });

    document.getElementById('message1').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = '';
    });

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

    document.getElementById('btn3').addEventListener('click', function() {
        let divContainer = document.createElement('div');
        let span = document.createElement('span');
        let spanText = document.createTextNode('Byron Baldwin');
        span.appendChild(spanText);
        divContainer.appendChild(span);
        document.body.appendChild(divContainer);
    });

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

