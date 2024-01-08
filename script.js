// import the DOM representation of the elements on the page
var box = document.getElementById("box");
var actionList = document.getElementById("action-list");

// create a new manager instance( using hammer.js code library)
var manager = new Hammer.Manager(box);

// create new custom tap recognizers( tap, doubletap, tripletap ) { using hammer.js code library }
var doubleTapRecognizer = new Hammer.Tap({
  event: "doubletap",
  taps: 2,
  interval: 300,
}); // for doubletap

var tripleTapRecognizer = new Hammer.Tap({
  event: "tripletap",
  taps: 3,
  interval: 300,
}); // for tripletap

var tapRecognizer = new Hammer.Tap({
  event: "tap",
  taps: 1,
}); // for tap only

// create new custom swipe recognizers( swipe-up, swipe-down, swipe-left, swipe-right ) { using hammer.js code library }
var swipeUpRecognizer = new Hammer.Swipe({
  event: "swipeup",
  velocity: 0.3,
  direction: Hammer.DIRECTION_UP,
}); // for swipe up

var swipeDownRecognizer = new Hammer.Swipe({
  event: "swipedown",
  velocity: 0.3,
  direction: Hammer.DIRECTION_DOWN,
}); // for swipe down

var swipeLeftRecognizer = new Hammer.Swipe({
  event: "swipeleft",
  velocity: 0.3,
  direction: Hammer.DIRECTION_LEFT,
}); // for swipe left

var swipeRightRecognizer = new Hammer.Swipe({
  event: "swiperight",
  velocity: 0.3,
  direction: Hammer.DIRECTION_RIGHT,
}); // for swipe right

var panStartRecognizer = new Hammer.Pan({
  event: "panstart",
  threshold: 10,
  direction: Hammer.DIRECTION_ALL,
}); // for pan start

// add the recognizers to the manager
manager.add([
  tripleTapRecognizer,
  doubleTapRecognizer,
  tapRecognizer,
  swipeUpRecognizer,
  swipeLeftRecognizer,
  swipeRightRecognizer,
  swipeDownRecognizer,
  panStartRecognizer,
]);

// attach listeners to the manager for events as specified by the recognizers and
// report them( events ) in the action-list and play their respective interactions as specified in the code
manager.on("tap", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">Tap detected</li>`;

  // play the interaction
  box.style.transform = `translateZ( -200px )`;
  resetBoxDisplay();
}); // single-tap ( tap )

manager.on("doubletap", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">double Tap detected</li>`;
}); // double-tap

manager.on("tripletap", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">triple Tap detected</li>`;
}); // triple-tap

manager.on("swipeup", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">swipe up detected</li>`;

  // play the interaction
  box.style.transform = `scale3d(1.8, 1, 3.5) translateY(20px)`;
  resetBoxDisplay();
}); // swipe-up

manager.on("swipeleft", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">swipe left detected</li>`;

  // play the interaction
  box.style.transform = `scale3d(1.8, 1, 3.5) translateX(-20px)`;
  resetBoxDisplay();
}); // swipe-down

manager.on("swiperight", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">swipe right detected</li>`;

  // play the interaction
  box.style.transform = `scale3d(1.8, 1, 3.5) translateX(20px)`;
  resetBoxDisplay();
}); // swipe-right

manager.on("swipedown", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">swipe down detected</li>`;

  // play the interaction
  box.style.transform = `scale3d(1.8, 1, 3.5) translateY(20px)`;
  resetBoxDisplay();
}); // swipe-down

manager.on("panstart", function (event) {
  // report the event in the action-list
  actionList.innerHTML += `<li class="list-group-item list-group-item-action color-bg-wheat text-capitalize">pan detected</li>`;

  // play the interaction
  box.style.transform = `scale3d(1.8, 1, 3.5) translateZ(-200px)`;
  resetBoxDisplay();
}); // pan-start

// the resetBoxDisplay() function
// this function is used to reset the CSS transform property when playing the interaction using a timeout
function resetBoxDisplay() {
  setTimeout(function () {
    box.style.transform = `none`;
  }, 500);
}
