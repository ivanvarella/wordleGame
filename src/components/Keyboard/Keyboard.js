import React from "react";

import KeyKeyboard from "../KeyKeyboard/KeyKeyboard";

function Keyboard({ guessInput, setGuessInput, guessedWords, answer, keys }) {
  return (
    <>
      <div className="keyboard-container">
        {keys.map(({ keyOfKeyboard, id, keyStatus }) => (
          <KeyKeyboard
            key={id}
            keyOfKeyboard={keyOfKeyboard}
            keyStatus={keyStatus}
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
