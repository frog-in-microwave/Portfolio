const dynamicText = document.getElementById("dynamic_words");
const words = ["Web Developer", "Work-Program Designer", "Automation Engineer"];


window.addEventListener('load' , function(){
    document.getElementById("preloader").style.display = "none";
});



// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type_effect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    document.getElementById("blinker").className = "";

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(type_effect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(type_effect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        document.getElementById("blinker").className = "blink";
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length; // Go to the next word, wrap around to first word
        }
        setTimeout(type_effect, 1200);
    }
}

type_effect();