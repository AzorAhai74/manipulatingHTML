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

    let para = document.createElement('p');
    para.className = 'para1';
    let para1 = document.getElementsByClassName('p');
    para.class = para1;
    para.id = 'paraOne';
    let paraText = document.createTextNode('This is a paragraph');
    para.appendChild(paraText);
    document.body.appendChild(para);


    let colors = ['blue', 'yellow', 'green', 'purple', 'pink'];

    function randomColors() {
        let randomColor1 = colors[Math.floor(Math.random() * 4) + 1];
        let randomColor2 = colors[Math.floor(Math.random() * 4) + 1];
        let randomColor3 = colors[Math.floor(Math.random() * 4) + 1];
        let randomColor4 = colors[Math.floor(Math.random() * 4) + 1];
        let randomColor5 = colors[Math.floor(Math.random() * 4) + 1];

        randomColors = '(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ',' + randomColor3 + ',' + randomColor4 + ',' + randomColor5 +')';
        console.log(randomColors);
        return randomColors;

    }

    document.getElementById('paraOne').addEventListener('click', function(e) {
        e.target.style.color = randomColors();
    });

});

