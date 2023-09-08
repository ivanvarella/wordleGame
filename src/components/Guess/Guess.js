import React from "react";

import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const letters = [...word];

  const checkedGuess = checkGuess(word, answer);

  return (
    <p className="guess">
      {letters.map((letter, index) => {
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
