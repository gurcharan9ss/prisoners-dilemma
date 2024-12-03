import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/PlayerSelection.css';

import img1 from '../images/im.png';
import img2 from '../images/sw1.png';
import img3 from '../images/ca.png';
import img4 from '../images/loki.png';
import img5 from '../images/dp1.png';

const players = [
  { id: 1, name: 'Iron Man', strategy: 'Tit-for-Tat', img: img1 },
  { id: 2, name: 'Scarlet Witch', strategy: 'Grim Trigger', img: img2 },
  { id: 3, name: 'Captain America', strategy: 'Always Cooperate', img: img3 },
  { id: 4, name: 'Loki', strategy: 'Always Defect', img: img4 },
  { id: 5, name: 'Deadpool', strategy: 'Random Choice', img: img5 },
];

export default function PlayerSelection({ setPlayer, isPlayer1 }) {
  const navigate = useNavigate();

  const handleSelect = (selectedPlayer) => {
    setPlayer(selectedPlayer.name);
    navigate(isPlayer1 ? '/select-player-2' : '/game');
  };

  return (
    <div className="player-selection">
     
      <h2>Select {isPlayer1 ? 'Player 1' : 'Player 2'}</h2>
      
      <div id="playerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {players.map((player, index) => (
            <div
              key={player.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="d-flex justify-content-center">
                <img
                  src={player.img}
                  className="d-block"
                  alt={player.name}
                />
                <div className="carousel-caption">
                  <h3>{player.name}</h3>
                  <p>Strategy: {player.strategy}</p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleSelect(player)}
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#playerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#playerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}
