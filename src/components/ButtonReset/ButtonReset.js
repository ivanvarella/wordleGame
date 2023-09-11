import React from "react";

function ButtonReset({ resetGame }) {
  return (
    <button className="buttonReset" onClick={resetGame}>
      Reset Game
    </button>
  );
}

export default ButtonReset;
