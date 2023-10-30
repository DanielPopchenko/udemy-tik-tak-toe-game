import { useState } from 'react';

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex, symbol) => {
    setGameBoard((prev) => {
      // ! To not to update array directly, we create a copy of it
      const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });

    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
