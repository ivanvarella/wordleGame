import React from "react";

import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessedWords, answer, keys, setKeys }) {
  const maxNumOfWords = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {maxNumOfWords.map((index) => {
        if (guessedWords[index] !== undefined) {
          return (
            <Guess
              answer={answer}
              word={guessedWords[index]}
              key={crypto.randomUUID()}
              keys={keys}
              setKeys={setKeys}
            />
          );
        } else if (guessedWords[index] === undefined) {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessResults;
