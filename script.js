let globe = document.getElementById("snowglobe");

let particles 

function calculateAccelerations(event) {
  const {x, y, z} = event.accelerationIncludingGravity;
  const accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);
  return accelerationMagnitude;
  
  tsParticles.loadJSON('particles,' 'particles.json'')
    .then(function () {
      particles = tsParticles.domItem(0);
      particles.pause()
    }
}

function shakeItUp() {
  particles.play();

  globe.classList.add("shake");
  setTimeout(() => {
    globe.classList.remove("shake");
  }, 1100);
  globe.addEventListener('click', () => {
    shakeItUp()
  });
}