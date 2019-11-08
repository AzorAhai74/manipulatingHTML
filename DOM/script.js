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

    let friends = ['Liz', 'Bo', 'Fain', 'Alan', 'Jacob', 'John', 'Margie', 'Katherine', 'Jim', 'Joe'];


    document.getElementById('btn4').addEventListener('click', function() {
        let unorderedList = document.createElement('ul');
        
        let listFriendLiz = document.createElement('li');
        let listFriendLizText = document.createTextNode('Liz');
        listFriendLiz.appendChild(listFriendLizText);
        unorderedList.appendChild(listFriendLiz);

        let listFriendBo = document.createElement('li');
        let listFriendBoText = document.createTextNode('Bo');
        listFriendBo.appendChild(listFriendBoText);
        unorderedList.appendChild(listFriendBo);

        let listFriendFain = document.createElement('li');
        let listFriendFainText = document.createTextNode('Fain');
        listFriendFain.appendChild(listFriendFainText);
        unorderedList.appendChild(listFriendFain);

        let listFriendAlan = document.createElement('li');
        let listFriendAlanText = document.createTextNode('Alan');
        listFriendAlan.appendChild(listFriendAlanText);
        unorderedList.appendChild(listFriendAlan);

        let listFriendJacob = document.createElement('li');
        let listFriendJacobText = document.createTextNode('Jacob');
        listFriendJacob.appendChild(listFriendJacobText);
        unorderedList.appendChild(listFriendJacob);

        let listFriendJohn = document.createElement('li');
        let listFriendJohnText = document.createTextNode('John');
        listFriendJohn.appendChild(listFriendJohnText);
        unorderedList.appendChild(listFriendJohn);

        let listFriendMargie = document.createElement('li');
        let listFriendMargieText = document.createTextNode('Margie');
        listFriendMargie.appendChild(listFriendMargieText);
        unorderedList.appendChild(listFriendMargie);

        let listFriendKatherine = document.createElement('li');
        let listFriendKatherineText = document.createTextNode('Katherine');
        listFriendKatherine.appendChild(listFriendKatherineText);
        unorderedList.appendChild(listFriendKatherine);

        let listFriendJim = document.createElement('li');
        let listFriendJimText = document.createTextNode('Jim');
        listFriendJim.appendChild(listFriendJimText);
        unorderedList.appendChild(listFriendJim);

        let listFriendJoe = document.createElement('li');
        let listFriendJoeText = document.createTextNode('Joe');
        listFriendJoe.appendChild(listFriendJoeText);
        unorderedList.appendChild(listFriendJoe);

        document.body.append(unorderedList);

        
    })


});

