const content = document.querySelector('.content');

content.addEventListener('scroll', function() {
  // Your custom scroll behavior here
});

const dotGrid = document.querySelector('.dot-grid');

const numDots = 100;
for (let i = 0; i < numDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.width = `${Math.random() * 10}px`;
  dot.style.height = dot.style.width;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.left = `${Math.random() * 100}%`;
  dotGrid.appendChild(dot);
}

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  dotGrid.style.backgroundPosition = `${mouseX * 100}% ${mouseY * 100}%`;
});
