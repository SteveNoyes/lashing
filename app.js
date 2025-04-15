const obj = document.getElementById("draggable-object");
let active = false;
let offset = { x: 0, y: 0 };

// Detect if two fingers are on the object
function isPinchGesture(e) {
  return e.touches.length === 2;
}

obj.addEventListener("touchstart", (e) => {
  if (isPinchGesture(e)) {
    const touch1 = e.touches[0];
    offset.x = touch1.clientX - obj.offsetLeft;
    offset.y = touch1.clientY - obj.offsetTop;
    active = true;
  }
});

obj.addEventListener("touchmove", (e) => {
  if (!active) return;

  e.preventDefault(); // prevent scrolling
  const touch = e.touches[0];
  const x = touch.clientX - offset.x;
  const y = touch.clientY - offset.y;

  obj.style.left = `${x}px`;
  obj.style.top = `${y}px`;
});

obj.addEventListener("touchend", (e) => {
  if (e.touches.length < 2) {
    active = false;
  }
});