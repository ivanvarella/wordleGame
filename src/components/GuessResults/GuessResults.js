import React from "react";

function GuessResults({ guessedWords }) {
  return (
    <div className="guess-results">
      {guessedWords.length > 0 &&
        guessedWords.map((word) => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              {word}
            </p>
          );
        })}
    </div>
  );
}

export default GuessResults;
