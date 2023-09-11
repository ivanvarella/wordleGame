import React from "react";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function KeyKeyboard({
  keyOfKeyboard,
  guessInput,
  setGuessInput,
  guessedWords,
  answer,
}) {
  const handleButton = (keyOfKeyboard) => {
    nextButtonLetter = guessInput + keyOfKeyboard;

    if (nextButtonLetter.length > 5) {
      window.alert("Only 5 caracters allowed!");
      return;
    }

    setGuessInput(nextButtonLetter);
  };

  return (
    <span>
      <button
        className="key-keyboard"
        onClick={() => {
          handleButton(keyOfKeyboard);
        }}
      >
        {keyOfKeyboard}
      </button>
    </span>
  );
}

export default KeyKeyboard;
