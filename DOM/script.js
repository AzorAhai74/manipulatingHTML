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

    document.getElementById('message').addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'yellow';
    });

    document.getElementById('message').addEventListener('mouseout', function(e) {
        e.target.style.backgroundColor = '';
    });

    

});

