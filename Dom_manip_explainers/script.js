// A SIMPLE SCRIPT TO MAKE A TRAFFIC LIGHT

// Select the elements we need and assign them to variables
const light = document.querySelector('#widget div');
const buttons = document.querySelectorAll('#widget button');

// Add an event listener to each button that will run a function when a click event occurs.
buttons[0].addEventListener('click', redLight);
buttons[1].addEventListener('click', amberLight);
buttons[2].addEventListener('click', greenLight);
buttons[3].addEventListener('click', offLight);
// Since the buttons variable contains a node list, each node can be selected using its index value, with zero being the first element in the list.

// One function for each button that changes the class attribute to the corresponding value.
function redLight(){
   light.setAttribute('class', 'stop');
}

function amberLight(){
    light.setAttribute('class', 'get-ready');
}

function greenLight(){
    light.setAttribute('class', 'go');
}

function offLight(){
    if (light.hasAttribute('class')) {
        light.removeAttribute('class');
    }
}
// The final function uses an if clause to check if the class attribute exists before removing it.

// If JavaScript is available, select the warning, change the class, update the message text, and enable the buttons.
const message = document.querySelector('p.warning');
message.setAttribute('class', 'prompt');
message.innerHTML = 'Use the buttons to change the colour of the traffic light';
buttons.forEach(button => button.disabled = false);