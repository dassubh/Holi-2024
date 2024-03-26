let lastSplashTime = 0;
const splashDelay = 120; // Delay in milliseconds between splashes

document.addEventListener('mousemove', function(e) {
  const currentTime = Date.now();
  if (currentTime - lastSplashTime > splashDelay) {
    lastSplashTime = currentTime;

    const splash = document.createElement('img');
    splash.src = 'paint-splash3.png'; // Replace with the path to your PNG image
    splash.style.position = 'absolute';
    splash.style.left = `${e.clientX - 100}px`;
    splash.style.top = `${e.clientY - 100}px`;
    splash.style.width = '200px';
    splash.style.height = '200px';
    splash.style.pointerEvents = 'none';

    let hue, saturation, brightness;
    do {
      hue = getRandomDegrees();
      saturation = getRandomPercentage() * 0.75 + 0.25; 
      brightness = getRandomPercentage() * 0.5 + 0.5; 
    } while (brightness < 0.6); 

    splash.style.filter = `
      hue-rotate(${hue}deg)
      saturate(${saturation})
      brightness(${brightness})
    `;

    splash.style.transition = 'transform 0.5s ease-out, filter 0.5s ease-out';
    splash.style.transform = 'scale(0)';
    document.body.appendChild(splash);

    setTimeout(function() {
      splash.style.transform = 'scale(1)';
    }, 10);
  }
});

function getRandomDegrees() {
  return Math.floor(Math.random() * 360);
}

function getRandomPercentage() {
  return Math.random() * 2; 
}