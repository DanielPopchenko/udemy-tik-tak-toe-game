import React, { useState } from 'react';

const PlayerInfo = ({ name, symbol }) => {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  return (
    <li>
      <span className="player">
        {editing ? (
          <input required type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
        ) : (
          <span className={editing ? 'player-name' : ''}>{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={() => setEditing((state) => !state)}>
        {editing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default PlayerInfo;
