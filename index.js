

// Detecting which button is pressed

const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        const WhichButton = this.innerHTML;

        SoundMaking(WhichButton);
        animationForButtons(WhichButton);
    
    });

}


// detecting which keyboard is pressed
document.addEventListener("keydown", function(event){
    SoundMaking(event.key);
    animationForButtons(event.key);
});


// Making the sounds

function SoundMaking(whichKey){

    switch (whichKey) {

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash =  new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default: console.log(WhichButton);              
    }

}

// Button animation

function animationForButtons(theKey){

    const activeKey = document.querySelector("." + theKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 90);

}
