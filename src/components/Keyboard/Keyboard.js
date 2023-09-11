import React from "react";

import KeyKeyboard from "../KeyKeyboard/KeyKeyboard";

function Keyboard({ guessInput, setGuessInput, guessedWords, answer }) {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];

  return (
    <>
      <div className="keyboard-container">
        {keys.map((keyOfKeyboard) => (
          <KeyKeyboard
            key={crypto.randomUUID() + "-" + keyOfKeyboard}
            keyOfKeyboard={keyOfKeyboard}
            guessInput={guessInput}
            setGuessInput={setGuessInput}
            guessedWords={guessedWords}
            answer={answer}
          />
        ))}
      </div>
    </>
  );
}

export default Keyboard;
