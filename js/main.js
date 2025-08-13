const lines = [
  "Your Crush Noticed<br>They Just Didn’t Text Yet",
  "Outfit - Mid<br>Shoes - Carrying",
  "These Shoes Don’t Walk<br>They Enter Rooms",
  "Retire Your Old Shoes<br>They're Embarrassing You",
  "Not everyone can pull these off<br>But you? You just might",
  "Drip approved<br>Sidewalks not ready",
  "Made for walking. And flexing<br>Mostly flexing",
  "Warning!!!<br>Your old sneakers might cry",
];

document.querySelector('.hero-line').innerHTML = 
  lines[Math.floor(Math.random() * lines.length)];

const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

document.querySelectorAll('a, button, lord-icon').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});