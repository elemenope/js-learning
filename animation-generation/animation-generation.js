//Variables representing elements aside from the soundbar.

var redBall = document.querySelector('.random-red-ball');

var dragArea = document.querySelector('.drag-box');

var ghostImage = document.getElementsByClassName('ghost-image')[0];
ghostImage.classList.add('random-red-ball');
ghostImage.style.left = "10000px";

var codeDisplay = document.getElementById('animation-textarea');

var br = document.createElement("br");

var outerDragArea = document.querySelectorAll("body > div:not(.drag-box)");


//Variable to test conditions against.

var executed, dontDrop, sequenceEnd, mouseIsDown;
mouseIsDown = 0;

//Soundbar variables.

var soundBar = document.querySelectorAll('.soundbar i');

var recordButton = document.getElementById('record');
var stopButton = document.getElementById('stop');
var ejectButton = document.getElementById('eject');
var rewindButton = document.getElementById('rewind');
var replayButton = document.getElementById('replay');

//Variables to store element locations relative to the document.

var coordinates = {
    parent: {
        top: dragArea.getBoundingClientRect().top,
        left: dragArea.getBoundingClientRect().left,
    },
    child: {
        top: redBall.getBoundingClientRect().top,
        left: redBall.getBoundingClientRect().left,
    },
    mouse: {
        top: [],
        left: []
    }

};

//Declare functions for event listeners for the mouse, draggable element, and drop area.

//Stores the red ball's movements in an array by tracking mouse movements in 0.25 second intervals.

function sequence(e){
        if (!executed && mouseIsDown){
            coordinates.mouse.top.unshift(e.clientY);
            coordinates.mouse.left.unshift(e.clientX);
        }
}

//To track mouse position when the ball is being dragged.

function initDrag(e){
    sequenceEnd = setTimeout(function(){
      sequence(e);
    }, 250); 
}

//Triggers the ball drop depending on current position

function dragDrop(e){
    if (!executed && recordButton.classList.contains('soundbar-active')){
        coordinates.mouse.top.unshift(e.clientY);
        coordinates.mouse.left.unshift(e.clientX);
        dragArea.append(redBall);
        redBall.style.left = ((coordinates.mouse.left[0]) - coordinates.parent.left) + "px";
        redBall.style.top = ((coordinates.mouse.top[0]) - coordinates.parent.top) + "px";
        soundBarSelect(stopButton);
        executed = true;
        return executed;
    }
}

//Changes the ghost image

function dragStart(e){
    redBall.classList.add('hide-me');
    e.dataTransfer.setDragImage(ghostImage, 0, 0);
    dragArea.addEventListener('dragleave', function(e){
      if (e.type = "dragleave" && e.target == dragArea){
        soundBarSelect(stopButton);
        clearTimeout(sequenceEnd);
        clearTimeout(dontDrop);
        executed = true;
        empty();
      }
    })
}

function dragEnd(e){
    redBall.classList.remove('hide-me');
    redBall.setAttribute('draggable', false);
    if (!executed){
        dragDrop(e);
    }
    clearTimeout(sequenceEnd);
    clearTimeout(dontDrop);
    executed = true;
    console.log(coordinates);
}

function dragEnter(e){
    e.preventDefault();
    executed = false;
    console.log(e.target.className + " dragenter" + e.type);
}

function dragOver(e){
    e.preventDefault();
    executed = false; 
    dontDrop = setTimeout(function(){ 
                if (!executed && recordButton.classList.contains('soundbar-active')){
                    dragDrop(e);
                    console.log("im the problem");
                }
                }, 4000);
}

//Prevents element from being dropped outside of the draggable area.

function dragLeave(e){
    executed = true;
    console.log(e.target.className + " dragleave");
}

//Declare functions for soundbar controls.

function record(e){
    empty();
    executed = false;
    soundBarSelect(recordButton);
    redBall.setAttribute('draggable', true);
}

function stop(e){
    redBall.setAttribute('draggable', false);
    clearTimeout(sequenceEnd);
    clearTimeout(dontDrop);
    soundBarSelect(stopButton);
    console.log("stop");
}

function eject(){
    if (coordinates.mouse.top.length > 1){
        soundBarSelect(ejectButton);
    }
    var i, j;
    var step = 100 / ((coordinates.mouse.top.length + coordinates.mouse.left.length) / 2);
    var frames = ((coordinates.mouse.top.length + coordinates.mouse.left.length) / 2);
    for (i = 0; i < coordinates.mouse.top.length; i++){
        console.log(coordinates.mouse.top[i]);
        console.log(i + " counter");
    }
}

function rewind(){
    if (coordinates.mouse.top.length > 1){
        soundBarSelect(rewindButton);
    }
}

function replay(){
    if (coordinates.mouse.top.length > 1){
        soundBarSelect(replayButton);
        setTimeout(function(){
            replayButton.classList.remove('soundbar-active');
        }, 3000);
    }
}

//Ensures that the active button being used will show as active.

function soundBarSelect(activeButton){
    soundBar.forEach(function(button){
       button.classList.remove('soundbar-active'); 
    });
    activeButton.classList.add('soundbar-active');
}

//Empties the stored coordinates in case the user decides to record all over again.

function empty(){
    coordinates.mouse.top.length = 0;
    coordinates.mouse.left.length = 0;
}

//Event listener for mouse.
document.addEventListener('mousedown', function(){
    ++mouseIsDown;
    console.log("mousedown" + mouseIsDown);
});
document.addEventListener('mouseup', function(){
    --mouseIsDown;
    console.log("mouseup" + mouseIsDown);
});


//Event listeners for draggable element. Must include dragstart and dragend. dragenter and dragover must not be allowed to resort to default browser action.

redBall.addEventListener('mousemove', initDrag);
redBall.addEventListener('dragstart', dragStart);
redBall.addEventListener('dragend', dragEnd);
 

//Event listeners for drop area.

dragArea.addEventListener('dragenter', dragEnter);
dragArea.addEventListener('dragover', dragOver);
dragArea.addEventListener('dragleave', dragLeave);

//Event listeners for soundbar.

recordButton.addEventListener('click', record);
stopButton.addEventListener('click', stop);
ejectButton.addEventListener('click', eject);
rewindButton.addEventListener('click', rewind);
replayButton.addEventListener('click', replay);