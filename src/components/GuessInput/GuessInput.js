import React from "react";

function GuessInput({ guessedWords, setGuessedWords }) {
  const [guessInput, setGuessInput] = React.useState("");

  //Disable input if the game is over
  const isGameOver = guessedWords.length >= 6;

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextGuessedWords = guessInput;

    // Verify if the word is already guessed
    const isAlreadyGuessed = guessedWords.includes(nextGuessedWords);
    if (isAlreadyGuessed) {
      alert("You already guessed that word, try again!");
      setGuessInput("");
      return;
    }

    setGuessedWords([...guessedWords, nextGuessedWords]);

    setGuessInput("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guessInput}
          onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
          required
          maxLength={5}
          minLength={5}
          pattern=".{5,5}"
          title="Only 5 caracters allowed!"
          disabled={isGameOver}
        />
      </form>
    </>
  );
}

export default GuessInput;
