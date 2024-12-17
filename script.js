const dynamicText = document.getElementById("dynamic_words");
const words = ["Web Developer", "Work-Program Designer", "Smart Office-Space Engineer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    document.getElementById("blinker").className = "";

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        document.getElementById("blinker").className = "blink";
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length; // Go to the next word, wrap around to first word
        }
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();