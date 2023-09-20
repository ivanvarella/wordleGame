import React from "react";

import KeyKeyboard from "../KeyKeyboard/KeyKeyboard";
import { KEYS_INICIAL } from "../../utils";

function Keyboard({ guessInput, setGuessInput, keys, guessedWords, answer }) {
  return (
    <>
      <div className="keyboard-container">
        {KEYS_INICIAL.map(({ keyOfKeyboard, id }) => (
          <React.Fragment key={id}>
            <KeyKeyboard
              keyOfKeyboard={keyOfKeyboard}
              guessInput={guessInput}
              setGuessInput={setGuessInput}
              guessedWords={guessedWords}
              answer={answer}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
