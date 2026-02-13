// Unicode ranges
const ranges = [
  // Latin supp
  { min: "00C0", max: "00FF" },
  // Hiragana
  { min: "3050", max: "308F" },
  // Katakana
  { min: "30A0", max: "30FF" },
  // Hangul
  { min: "AC00", max: "D79F" },
  // Latin ext
  { min: "0100", max: "02AF" },
  // Hebrew
  { min: "05D0", max: "05EA" },
  // Arabic
  { min: "0620", max: "06D3" },
  // Devanagari
  { min: "0904", max: "097F" },
  // Mongolian
  { min: "1820", max: "186F" },
  // Maths
  { min: "2200", max: "22FF" },
];

// Get DOM
const matrix1 = document.getElementById("rndChar") as HTMLCanvasElement;
const ctx1 = matrix1!.getContext("2d");
ctx1!.font = "30px serif";

// Generate random numbers
function generateRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndCode() {
  // Get a random unicode range
  const rndRange = Math.floor(Math.random() * 5);
  const codeMin = Number("0x" + ranges[rndRange].min);
  const codeMax = Number("0x" + ranges[rndRange].max);
  // Randomize a code
  const rndCode = generateRandom(codeMin, codeMax);
  // Convert to unicode
  return String.fromCodePoint(rndCode);
}

/*/ Random x position
const Xmin = 0;
const Xmax = 200;
const rndX = generateRandom(Xmin, Xmax);
*/

let anmCharId = 0;
// animate
function animateChar() {
  const unicode = getRndCode();
  ctx1!.clearRect(0, 0, matrix1.width, matrix1.height);
  ctx1!.fillText(unicode, 100, 100, 1000);
  anmCharId = requestAnimationFrame(animateChar);
}

let animationId = 0;
matrix1.addEventListener("mouseenter", () => {
  // init animation
  anmCharId = requestAnimationFrame(animateChar);
});
matrix1.addEventListener("mouseleave", () => {
  cancelAnimationFrame(anmCharId);
});
