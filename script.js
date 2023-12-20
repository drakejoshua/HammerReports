// import the DOM representation of the elements on the page
var box = document.getElementById("box");
var actionList = document.getElementById("action-list");


// create a new manager instance( using hammer.js code library)
var manager = new Hammer.Manager( box );


// create new custom recognizers( tap, doubletap, tripletap ) { using hammer.js code library }
var doubleTapRecognizer = new Hammer.Tap({
    event: "doubletap",
    taps: 2,
    interval: 300
});             // for doubletap

var tripleTapRecognizer = new Hammer.Tap({
    event: "tripletap",
    taps: 3,
    interval: 300
});             // for tripletap

var tapRecognizer = new Hammer.Tap({
    event: "tap",
    taps: 1,
});             // for tap only


// add the recognizers to the manager
manager.add([tripleTapRecognizer, doubleTapRecognizer, tapRecognizer]);


// attach listeners to the manager for events as specified by the recognizers and
// report them( events ) in the action-list on the page
manager.on( "tap", function( event ){
    actionList.innerHTML += 
        `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">Tap detected</li>`;
} );

manager.on( "doubletap", function( event ){
    actionList.innerHTML += 
        `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">double Tap detected</li>`;
} );

manager.on( "tripletap", function( event ){
    actionList.innerHTML += 
        `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">triple Tap detected</li>`;
} );