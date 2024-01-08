// Selecting DOM elements
const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 30; // px of distance

// Function to apply shadow effect based on mouse movement
function shadow (e){
    // Getting the width and height of the hero element
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    // Destructuring the offsetX and offsetY properties from the mouse event
    let {offsetX: x, offsetY: y} = e;
    
    // Adjusting the x and y values if the event target is not the hero element itself
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    } 

    // Calculating the distance to move the text shadow in the x and y directions
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    // Applying the text shadow to the h1 element
    text.style.textShadow = `${-xWalk}px ${-yWalk}px 10px grey`;
}

// Adding a mousemove event listener to the hero element, calling the shadow function
hero.addEventListener('mousemove', shadow); 