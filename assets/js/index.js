

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector('.toggle');

toggle.addEventListener('click', function(){
    sidebar.classList.toggle('close');

});