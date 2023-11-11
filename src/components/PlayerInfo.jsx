import React, { useState } from 'react';

const PlayerInfo = ({ name, symbol, isActive, onChangeName }) => {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleNameChange = () => {
    setEditing((editing) => !editing);

    if (editing) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editing ? (
          <input
            required
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className={editing ? 'player-name' : ''}>{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleNameChange}>
        {editing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default PlayerInfo;
