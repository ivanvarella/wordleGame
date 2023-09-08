import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setGuessedWords] = React.useState([]);

  return (
    <>
      <GuessResults guessedWords={guessedWords} answer={answer} />

      <GuessInput
        guessedWords={guessedWords}
        setGuessedWords={setGuessedWords}
      />
    </>
  );
}

export default Game;
