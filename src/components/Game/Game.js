import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import BannerGameOver from "../BannerGameOver/BannerGameOver";
import ButtonReset from "../ButtonReset/ButtonReset";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setGuessedWords] = React.useState([]);
  const [guessInput, setGuessInput] = React.useState("");
  // playing, won, lost
  const [gameStatus, setGameStatus] = React.useState("playing");

  const resetGame = () => {
    answer = sample(WORDS);

    console.log("New word:");
    console.log({ answer });

    setGuessedWords([]);
    setGuessInput("");

    setGameStatus("playing");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verify if the word is already guessed
    const isAlreadyGuessed = guessedWords.includes(guessInput);
    if (isAlreadyGuessed) {
      alert("You already guessed that word, try again!");
      setGuessInput("");
      return;
    }

    const nextGuessedWords = [...guessedWords, guessInput];

    setGuessedWords(nextGuessedWords);
    setGuessInput("");

    if (guessInput.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuessedWords.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guessedWords={guessedWords} answer={answer} />

      <ButtonReset resetGame={resetGame} />

      <Keyboard
        guessInput={guessInput}
        setGuessInput={setGuessInput}
        guessedWords={guessedWords}
        answer={answer}
      />

      <GuessInput
        guessInput={guessInput}
        setGuessInput={setGuessInput}
        handleSubmit={handleSubmit}
        gameStatus={gameStatus}
      />

      {gameStatus !== "playing" && (
        <BannerGameOver
          gameStatus={gameStatus}
          answer={answer}
          numOfTries={guessedWords.length}
        />
      )}
    </>
  );
}

export default Game;
