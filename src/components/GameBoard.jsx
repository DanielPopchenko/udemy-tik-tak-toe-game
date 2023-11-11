const GameBoard = ({ onSelectSquare, board }) => {
  // ! Идея этого в том, чтобы менеджить как можно меньше стейта, а манипулировать други
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// console.log(gameBoard);

// const handleSelectSquare = (rowIndex, colIndex, symbol) => {
//   setGameBoard((prev) => {
//     // ! To not to update array directly, we create a copy of it
//     const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
//     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//     return updatedBoard;
//   });

//   onSelectSquare();
// };
