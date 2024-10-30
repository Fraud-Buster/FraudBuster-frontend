import React, { useRef } from "react";

const TextAnimation = ({ text }) => {
  const alpha = ['!', '#', '$', '0', '1', '2', '3', '4', '5', '6', 'A', 'G', 'T', 'H', 'Y', 'Z', 'X', 'W', 'O', 'K', 'Q', 'S'];
  const wordRefs = useRef([]); // Use refs to store the words

  // Split the sentence into words and then letters
  const words = text.split(" ").map((word, wordIndex) => {
    const letters = word.split("").map((letter, letterIndex) => (
      <span
        key={letterIndex}
        className="inline-block letter"
        data-letter={letter}
      >
        {letter}
      </span>
    ));
    return (
      <span
        key={wordIndex}
        className="inline-block mr-2 word"
        ref={(el) => wordRefs.current[wordIndex] = el} // Attach ref to each word
        onMouseEnter={() => animateWord(wordIndex)}
      >
        {letters}
      </span>
    );
  });

  // Function to animate each word
  const animateWord = (wordIndex) => {
    const wordElement = wordRefs.current[wordIndex];
    const letters = wordElement.querySelectorAll(".letter");

    letters.forEach((letter, i) => {
      setTimeout(() => animateLetter(letter), i * 100);
    });
  };

  // Function to animate each letter
  const animateLetter = (letterElement) => {
    let originalLetter = letterElement.getAttribute("data-letter");
    let i = 0;

    const interval = setInterval(() => {
      const randomLetter = alpha[Math.floor(Math.random() * alpha.length)];
      letterElement.textContent = randomLetter;

      if (i === 5) {
        clearInterval(interval);
        letterElement.textContent = originalLetter;
      }
      i++;
    }, 40);
  };

  return <>{words}</>;
};

export default TextAnimation;