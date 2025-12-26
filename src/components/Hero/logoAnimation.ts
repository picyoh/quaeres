const logoSection = document.getElementById("logoSection");
const heroLogo = document.getElementById("heroLogo");
const logoPos = heroLogo!.getBoundingClientRect();

let posX = 0;
let posY = 0;
let timing = 100;
// Animation id
let animate = 0;

// Start animation
logoSection!.addEventListener("mouseenter", () => {
  animate = requestAnimationFrame(step);
});

function step() {
  // Modify timing
  timing > 0 ? timing-- : timing;
  // Get mouse move
  logoSection!.addEventListener("mousemove", (event) => {
    // Get positions
    posX = Math.round((logoPos.left - event.clientX) / 15);
    posY = Math.round((logoPos.top - event.clientY) / 15);
    // Modify style
    heroLogo!.style.filter = `drop-shadow(${posX}px ${posY}px 1px var(--shadow)) drop-shadow(${posX}px ${posY}px 1px var(--light-shadow))`;
    heroLogo!.style.transition = `${timing / 100}s`;
  });
  animate = requestAnimationFrame(step);
}
// Stop animation
logoSection!.addEventListener("mouseleave", () => {
  timing = 100;
  heroLogo!.style.filter = "";
  heroLogo!.style.transition = "";
  cancelAnimationFrame(animate);
});
