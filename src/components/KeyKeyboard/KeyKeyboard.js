import React from "react";
import { checkGuess } from "../../game-helpers";

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

  let mapOfKeys = [];
  guessedWords.forEach((word) => {
    mapOfKeys.push(...checkGuess(word, answer));
  });

  let status = null;
  mapOfKeys.forEach((key) => {
    if (keyOfKeyboard === key.letter) {
      status = key.status + "Key";
      // let status2 = status + "Key";
      // console.log("status: ", status2);
    }
  });
  return (
    <span>
      <button
        className={`key-keyboard ${status}`}
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
