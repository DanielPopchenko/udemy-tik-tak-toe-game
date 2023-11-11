import { useState } from 'react';
import GameBoard from './components/GameBoard';
import PlayerInfo from './components/PlayerInfo';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INNITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePLayer = (gameTurns) => {
  let currentPLayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPLayer = 'O';
  }

  return currentPLayer;
};

const deriveWinner = (gameBoard, players) => {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // !  players[firstSquareSymbol] - потому что это те значния которые у нас в стейте
      // ! и одновременно это значние Х или О которое есть на firstSquareSymbol
      winner = players[firstSquareSymbol];
    } else {
    }
  }

  return winner;
};

const deriveGameBoard = (gameTurns) => {
  // ! чтобы закончить игру нам надо заресетить массив доски
  // ! если мы будем это делать просто говоря setGameTurns[], то ничего не выйдет
  // ! нам надо создать глубокую копию массива и мутировать уже именно его !
  let gameBoard = [...INNITIAL_GAME_BOARD.map((innerArr) => [...innerArr])];

  for (const turn of gameTurns) {
    console.log(turn);
    const {
      square: { row, col },
      player,
    } = turn;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  // ! Из за того что обновляется состояние, наш компонент будет перерендереваться
  // ! каждый раз после нажатия на кнопку (поле)
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);

  // ! Теперь у нас тоже есть activePlayer но уже без состояния, а с помощью функции / computed value
  const activePlayer = deriveActivePLayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const [players, setPlayers] = useState(PLAYERS);
  const winner = deriveWinner(gameBoard, players);
  const isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIdx, columnIdx) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePLayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIdx, col: columnIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevState) => ({ ...prevState, [symbol]: newName }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <PlayerInfo
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>

        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
export default App;
