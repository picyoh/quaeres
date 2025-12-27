// Get switch checkbox
const switchInput = document.getElementById(
  "switchInput"
) as HTMLInputElement | null;
// Get svg circle
const switchLogo = document.getElementById("switchLogo");
// Listen to click
switchInput?.addEventListener("click", () => {
  if (switchInput?.checked) {
    console.log(switchInput.checked);
    // Change Logo
    switchLogo?.classList.replace("dark-logo", "light-logo");
    // Switch to dark mode
  } else {
    // Change Logo
    switchLogo?.classList.replace("light-logo", "dark-logo");
    // Switch to light mode
  }
});
