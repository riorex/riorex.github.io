'use strict'

var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Good idea';

document.querySelector('#success').onclick = function() {
    alert('Success!');
}

document.querySelector('#default').onclick = function() {
    alert('Nothing intresting...');
}

document.querySelector('#error').onclick = function() {
    alert('Wait, oh shi...!');
}

var shownImage = document.querySelector('img');

shownImage.onclick = function() {
    var imgSrc = shownImage.getAttribute('src');
    if(imgSrc === 'images/dragon.jpg'){
        shownImage.setAttribute('src', 'images/cock.jpg');
    } else {
        shownImage.setAttribute('src', 'images/dragon.jpg');
    }
    
}

var chButton = document.querySelector('#chuser');

function setUserName(){
    var uName;
    while (uName == undefined || uName == '') {
        uName = prompt('U name, plz');
    }
    localStorage.setItem('name', uName);
    myHeading.textContent = 'Aloha, ' + uName;

}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Halo, ' + storedName;
}

chButton.onclick = function() {
    setUserName();
}