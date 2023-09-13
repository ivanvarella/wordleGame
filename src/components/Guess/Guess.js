import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ word, answer, keys }) {
  const letters = [...word];

  const checkedGuess = checkGuess(word, answer);

  return (
    <p className="guess">
      {letters.map((letter, index) => {
        //Keyboard keys color status
        // Problem: some how the status are been applied on keys before
        // the use of setKeys. Also the KEYS_INICIAL are been updated
        // even not doing it explicitly.
        // And this is causing another problem that is not possible
        // to reset the keyboard by setKeys(KEYS_INITIAL) once KEYS_INICIAL
        // are altered.
        const objIndex = keys.findIndex(
          (obj) => obj.keyOfKeyboard === checkedGuess[index].letter
        );

        if (checkedGuess[index].status === "correct") {
          const nextKeys = [...keys];
          nextKeys[objIndex].keyStatus = "key-keyboard correctKey";
          //console.log("nextKeys", nextKeys);
        } else if (checkedGuess[index].status === "misplaced") {
          const nextKeys = [...keys];
          nextKeys[objIndex].keyStatus = "key-keyboard misplacedKey";
          //console.log("nextKeys", nextKeys);
        } else if (checkedGuess[index].status === "incorrect") {
          const nextKeys = [...keys];
          nextKeys[objIndex].keyStatus = "key-keyboard incorrectKey";
          //console.log("nextKeys", nextKeys);
        }

        return (
          <span
            className={`cell ${checkedGuess[index].status}`}
            key={crypto.randomUUID()}
          >
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
