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













const className = 'smiley__wrapper';
const smiley = document.getElementById(className);

const mouseFunction = (mouse) => {
  const clientX = mouse.clientX ? mouse.clientX : mouse.touches[0].clientX;
  const clientY = mouse.clientY ? mouse.clientY : mouse.touches[0].clientY;
  if (clientX > window.innerWidth / 2 + 20) {
    smiley.classList.add(`${className}--right`);
    smiley.classList.remove(`${className}--left`);
  } else if (clientX < window.innerWidth / 2 - 20) {
    smiley.classList.add(`${className}--left`);
    smiley.classList.remove(`${className}--right`);
  } else {
    smiley.classList.remove(`${className}--right`);
    smiley.classList.remove(`${className}--left`);
  }
  if (clientY > window.innerHeight / 2 + 20) {
    smiley.classList.add(`${className}--bottom`);
    smiley.classList.remove(`${className}--top`);
  } else if (clientY < window.innerHeight / 2 - 20) {
    smiley.classList.add(`${className}--top`);
    smiley.classList.remove(`${className}--bottom`);
  } else {
    smiley.classList.remove(`${className}--bottom`);
    smiley.classList.remove(`${className}--top`);
  }
};

// In a PROD case we should use a "throttle function" for these events
window.addEventListener('mousemove', mouseFunction);
window.addEventListener('touchstart', mouseFunction);