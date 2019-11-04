window.addEventListener('DOMContentLoaded', function() {
    let btn = document.createElement('button');
    btn.className = 'button1';
    let button1 = document.getElementsByClassName('button');
    btn.class = button1;
    let buttonText = document.createTextNode('Click Here');
    btn.appendChild(buttonText);

    btn.addEventListener('click',function() {
        alert('Hello, I hope you are doing well today');
    })

    document.getElementById('btn2').addEventListener('click', function() {
        alert(document.getElementById('message').value);
    });

    let div = document.createElement('div');
    div.className = 'div1';
    let divOne = document.getElementsByClassName('div');
    div.class = divOne;
    document.body.appendChild(div);

    document.body.appendChild(btn);

});