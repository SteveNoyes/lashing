// const obj = document.getElementById("draggable-object");
// let active = false;
// let offset = { x: 0, y: 0 };

// // Detect if two fingers are on the object
// function isPinchGesture(e) {
//   return e.touches.length === 2;
// }

// obj.addEventListener("touchstart", (e) => {
//   if (isPinchGesture(e)) {
//     const touch1 = e.touches[0];
//     offset.x = touch1.clientX - obj.offsetLeft;
//     offset.y = touch1.clientY - obj.offsetTop;
//     active = true;
//   }
// });

// obj.addEventListener("touchmove", (e) => {
//   if (!active) return;

//   e.preventDefault(); // prevent scrolling
//   const touch = e.touches[0];
//   const x = touch.clientX - offset.x;
//   const y = touch.clientY - offset.y;

//   obj.style.left = `${x}px`;
//   obj.style.top = `${y}px`;
// });

// obj.addEventListener("touchend", (e) => {
//   if (e.touches.length < 2) {
//     active = false;
//   }
// });













// const className = 'smiley__wrapper';
// const smiley = document.getElementById(className);

// const mouseFunction = (mouse) => {
//   const clientX = mouse.clientX ? mouse.clientX : mouse.touches[0].clientX;
//   const clientY = mouse.clientY ? mouse.clientY : mouse.touches[0].clientY;
//   if (clientX > window.innerWidth / 2 + 20) {
//     smiley.classList.add(`${className}--right`);
//     smiley.classList.remove(`${className}--left`);
//   } else if (clientX < window.innerWidth / 2 - 20) {
//     smiley.classList.add(`${className}--left`);
//     smiley.classList.remove(`${className}--right`);
//   } else {
//     smiley.classList.remove(`${className}--right`);
//     smiley.classList.remove(`${className}--left`);
//   }
//   if (clientY > window.innerHeight / 2 + 20) {
//     smiley.classList.add(`${className}--bottom`);
//     smiley.classList.remove(`${className}--top`);
//   } else if (clientY < window.innerHeight / 2 - 20) {
//     smiley.classList.add(`${className}--top`);
//     smiley.classList.remove(`${className}--bottom`);
//   } else {
//     smiley.classList.remove(`${className}--bottom`);
//     smiley.classList.remove(`${className}--top`);
//   }
// };

// In a PROD case we should use a "throttle function" for these events
// window.addEventListener('mousemove', mouseFunction);
// window.addEventListener('touchstart', mouseFunction);




















//Define vars
var pupilLeft;
var pupilTop;

//Get the eyewidth (parent div of the pupils)
var eyeWidth = document.getElementsByClassName("eye")[0].offsetWidth;
var eyeHeight = document.getElementsByClassName("eye")[0].offsetHeight;

//Get the pupils
var pupil1 = document.getElementsByClassName("pupil")[0];
var pupil2 = document.getElementsByClassName("pupil")[1];
var pupils = [pupil1, pupil2];
//Get the pupils width and height
var pupilWidth = document.getElementsByClassName("pupil")[0].offsetWidth;
var pupilHeight = document.getElementsByClassName("pupil")[0].offsetHeight;

//On mousemove execute MoveEyes
document.addEventListener("mousemove", MoveEyes);

//Make pupils follow the cursor
function MoveEyes(event){
  //Get mouse positions
  var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  var mouseY = (event.clientY / window.innerHeight) * 2 - 1;
   
  //The standard offset (margins) for the pupils and keep the pupil in the eye
  var horizontalOffset = (eyeWidth - pupilWidth) - (pupilWidth/4); 
  var verticalOffset = (eyeHeight - pupilHeight) - (pupilHeight/4);
  
  //Calculate min and max that eye can move 
  pupilLeft = clamp(eyeWidth * mouseX, -horizontalOffset, horizontalOffset);
  pupilLeft = Math.floor(pupilLeft);
  pupilTop = clamp(eyeHeight * mouseY, -verticalOffset, verticalOffset);
  pupilTop = Math.floor(pupilTop);
  
  //Get all the pupils and change the margins
  pupils.forEach(pupil => {
    pupil.style.marginLeft = pupilLeft+"px";
    pupil.style.marginTop = pupilTop+"px";
    //Make sure width and height stay the same
    pupil.style.width = pupilWidth+"px";
    pupil.style.height = pupilHeight+"px";
  });
}

//Clamp between a min and max
function clamp(x, a, b) {
  if (x < a) return a;
  if (x > b) return b;
  return x;
}
