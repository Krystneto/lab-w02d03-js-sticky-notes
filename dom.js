console.log("Come back! I love you!");
 // JavaScript goes here

// create global vars
var body = document.querySelector('body'); //gets body
var divMain = document.querySelector('#main'); //gets div "main"

var counter = document.createElement('div'); //create div "counter"
var counterText = counter.textContent = "Total Number of Notes";

var button = document.createElement('button'); //create button
var buttonText = button.textContent = "Add a Note"


var handleButton = function(event) { //button handler
  console.log('clicked button');
  var div = document.createElement('div');
  var divNote = div.classList.add('note');
  body.appendChild(div);
  var span = document.createElement('span');
  span.textContent = 'X';
  var pTag = document.createElement('p');
  pTag.textContent = 'stuff'
  div.appendChild(span);
  div.appendChild(pTag);
}

divMain.appendChild(counter);
document.body.appendChild(button);
// event listener for button clicked
button.addEventListener('click', handleButton);

