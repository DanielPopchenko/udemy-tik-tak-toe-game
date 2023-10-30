import { Linter } from 'eslint';
import React from 'react';

const GameBoard = () => {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, idx) => (
        <li key={idx}>
          <ol>
            {row.map((playerSymbol, idx) => (
              <li key={idx}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
