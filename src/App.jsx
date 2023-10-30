import { useState } from 'react';
import GameBoard from './components/GameBoard';
import PlayerInfo from './components/PlayerInfo';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((curActivePl) => (curActivePl === 'X' ? 'O' : 'X'));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo name="Player-1" symbol="X" isActive={activePlayer === 'X'} />
          <PlayerInfo name="Player-2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
      LOG
    </main>
  );
}
export default App;
