var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
}
else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
