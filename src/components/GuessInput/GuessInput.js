import React from "react";

function GuessInput({ handleSubmit, guessInput, setGuessInput, gameStatus }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "playing"}
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
  );
}

export default GuessInput;
