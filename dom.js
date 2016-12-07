console.log("Come back! I love you!");
 // JavaScript goes here

// create global vars
var body = document.querySelector('body'); //gets body
var divMain = document.querySelector('#main'); //gets div "main"

// create the Counter
var counter = document.createElement('div'); //create div "counter"
var counterText = counter.textContent = "Total Number of Notes";
var counterSpan = document.createElement('span');
counter.classList.add('counter');
counterSpan.textContent = 0;
counter.appendChild(counterSpan);
divMain.appendChild(counter);

// create the Button
var button = document.createElement('button'); //create button
var buttonText = button.textContent = "Add a Note"
divMain.appendChild(button);

// create Div Note Container
var noteContainer = document.createElement('div');
noteContainer.classList.add('note-container');
body.appendChild(noteContainer);
divMain.appendChild(button);



// creates New Notes on 'click'
var handleButton = function(event) { //button handler
  console.log('clicked button');
  var div = document.createElement('div');
  var divNote = div.classList.add('note');
  noteContainer.appendChild(div);
  var span = document.createElement('span');
  span.classList.add('remove')
  span.textContent = 'X';
  var pTag = document.createElement('p');
  pTag.textContent = 'stuff'
  div.appendChild(span);
  div.appendChild(pTag);
  pTag.setAttribute('contenteditable',true);
  span.addEventListener('click', handleRemoveNote);
}

// event listener for button clicked
button.addEventListener('click', handleButton);

// handle to remove the Note
var handleRemoveNote = function(event) {
console.log(event.target);
  event.target.parentNode.remove();
}






