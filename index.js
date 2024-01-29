/*jshint esversion: 6 */

/*
const handleClick = () => {
    alert("Something is clicked.");
};

document.querySelector("button").addEventListener("click",handleClick);
*/
// This will select the first <button> element only
// Write function name without (), otherwise it will run the function directly as a straight-up call.

/* OR** */

for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
// .drum - to be more specific
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Write the function using anonymous function notation. **
        /* alert("Something is clicked."); */
        // console.log(this.innerHTML);  // this => <button class="w drum">w</button> (returns button object)

        makeSound(this.innerHTML);  // Important function

        buttonAnimation(this.innerHTML);
    });
}

//------------------------------------------------------------------------------

document.addEventListener("keydown", function(event) {
// Listening for Keydown events from all over the document
    //alert("Key was pressed!");

    // console.log(event); // An object containing information about the action that just happened
                           // => KeyboardEvent object
    // console.log(this);  // Represents WHAT IS TRIGGERED (when the 'keydown' event
                           // is fired)  => document

    // .key => property of the KeyboardEvent object, returns the value of the key pressed by the user

    makeSound(event.key);  // Important function

    buttonAnimation(event.key);
});

//------------------------------------------------------------------------------

function makeSound(keyValue) {
    switch(keyValue) {
        case 'w':
            // Because the text written inside of <button> is of the datatype String.
            let audioObjectW = new Audio('./sounds/tom-1.mp3');
            audioObjectW.play();
            break;
        case 'a':
            let audioObjectA = new Audio('./sounds/tom-2.mp3');
            audioObjectA.play();
            break;
        case 's':
            let audioObjectS = new Audio('./sounds/tom-3.mp3');
            audioObjectS.play();
            break;
        case 'd':
            let audioObjectD = new Audio('./sounds/tom-4.mp3');
            audioObjectD.play();
            break;
        case 'j':
            let audioObjectJ = new Audio('./sounds/snare.mp3');
            audioObjectJ.play();
            break;
        case 'k':
            let audioObjectK = new Audio('./sounds/crash.mp3');
            audioObjectK.play();
            break;
        case 'l':
            let audioObjectL = new Audio('./sounds/kick-bass.mp3');
            audioObjectL.play();
            break;
        default:
            alert("Strange button clicked!");
    }
    // let audioObject = new Audio('./sounds/crash.mp3');
    // audioObject.play();
}

//------------------------------------------------------------------------------

// Fat Arrow Function Notation
const buttonAnimation = (currentKey) => {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout( function() { activeButton.classList.remove("pressed"); } ,  100 );
    // The setTimeout() method calls a function after a number of milliseconds.
};
