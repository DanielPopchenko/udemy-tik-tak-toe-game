import GameBoard from './components/GameBoard';
import PlayerInfo from './components/PlayerInfo';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name="Player-1" symbol="X" />
          <PlayerInfo name="Player-2" symbol="O" />
        </ol>

        <GameBoard />
      </div>
      LOG
    </main>
  );
}
export default App;
