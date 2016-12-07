console.log("Come back! I love you!");
 // JavaScript goes here

// create global selectors
var body = document.querySelector('body'); //gets body
var divMain = document.querySelector('#main'); //gets div "main"

// create the Counter
var counter = document.createElement('div'); //create div "counter"
var counterText = counter.textContent = "Total Number of Notes ";
var counterSpan = document.createElement('span');
counter.classList.add('counter');
counterSpan.textContent = 0;
counter.appendChild(counterSpan);
divMain.appendChild(counter);

// create the Button to add Note
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
  var currentDate = new Date();
  var span = document.createElement('span');
  span.classList.add('remove')
  span.textContent = 'X ' + currentDate
  var pTag = document.createElement('p');
  pTag.textContent = '';
  div.appendChild(span);
  div.appendChild(pTag);
  pTag.setAttribute('contenteditable',true);
  pTag.classList.add('inner-note');
  span.addEventListener('click', handleRemoveNote);
  var noteItems = document.querySelectorAll('.note');
  counterSpan.textContent = " " + noteItems.length;
  // create variable for Time Stamp

}

// handle to remove the Note and update Counter
var handleRemoveNote = function(event) {
  event.target.parentNode.remove();
  var noteItems = document.querySelectorAll('.note');
  counterSpan.textContent = " " + noteItems.length
}

// event listener for button clicked
button.addEventListener('click', handleButton);





