let prevIndex = 0;
// Get word list
const wordList: NodeListOf<HTMLElement> = document.querySelectorAll(".word");
// Get first word to animate
const typeCursor = document.getElementById("typeCursor");
// Adjust animation for first time
adjustAnimation(typeCursor!);
document.documentElement.style.setProperty("--animps", "running");
// Loop through list
wordList.forEach((word, i) => {
  // Listen to animation end
  word.addEventListener("animationend", (e: AnimationEvent) => {
    // Get cursor position in list
    if (word.id === "typeCursor" && e.animationName === "select") {
      // Get previous index
      prevIndex < wordList.length - 1 ? (prevIndex = i + 1) : (prevIndex = 0);
      // Adjust animation
      adjustAnimation(wordList[prevIndex]);
      // Change word
      setTimeout(() => {
        word.removeAttribute("id");
        wordList[prevIndex].id = "typeCursor";
      }, 500);
    }
  });
});

function adjustAnimation(word: Element) {
  const wordLength = word.textContent.length.toString();
  document.documentElement.style.setProperty("--type-steps", wordLength);
  document.documentElement.style.setProperty("--type-chars", wordLength + "ch");
}
