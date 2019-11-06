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
    let h2 = document.createElement('h2');
    h2.className = 'header2';
    let header2 = document.getElementsByClassName('h2');
    h2.class = header2;
    let h2Text = document.createTextNode('This should change color when the mouse hovers over');
    h2.appendChild(h2Text);
    div.appendChild(h2);
    document.body.appendChild(div);

    
    div.addEventListener('mouseover', function() {
        div.style.backgroundcolor = 'green';
    });
    

    




    document.body.appendChild(btn);

});

