import React from "react";

function GuessInput({ guessedWords, setGuessedWords }) {
  const [guessInput, setGuessInput] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextGuessedWords = guessInput;
    setGuessedWords([...guessedWords, nextGuessedWords]);

    console.log("guessInput: ", guessInput);
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
        />
      </form>
      <p>Current Input Guess: {guessInput}</p>
      <p>Guessed Words: {[...guessedWords]}</p>
    </>
  );
}

export default GuessInput;
