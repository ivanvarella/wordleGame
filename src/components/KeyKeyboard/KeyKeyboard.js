import React from "react";

function KeyKeyboard({ keyOfKeyboard, keyStatus, guessInput, setGuessInput }) {
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
        className={keyStatus}
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
