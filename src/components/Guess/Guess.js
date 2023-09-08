import React from "react";

function Guess({ word }) {
  const letters = [...word];

  return (
    <p className="guess">
      {letters.map((letter, index) => {
        return (
          <span className="cell" key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
