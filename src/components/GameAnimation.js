import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/GameAnimation.css';


import ironMan from '../images/im.png';
import scarletWitch from '../images/sw1.png';
import captainAmerica from '../images/ca.png';
import loki from '../images/loki.png';
import deadpool from '../images/dp1.png';

const characterImages = {
  'Iron Man': ironMan,
  'Scarlet Witch': scarletWitch,
  'Captain America': captainAmerica,
  'Loki': loki,
  'Deadpool': deadpool,
};

export default function GameAnimation({ gameData }) {
  const navigate = useNavigate();
  const [currentRound, setCurrentRound] = useState(0);

  useEffect(() => {
    if (!gameData || gameData.player1History.length < 10) {
      alert('Not enough data for animation. Redirecting to results.');
      navigate('/results');
      return;
    }

    if (currentRound < 10) {
      const timeout = setTimeout(() => {
        setCurrentRound((prev) => prev + 1);
      }, 1000); // 1 second delay per round

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => navigate('/results'), 2000);
    }
  }, [currentRound, gameData, navigate]);

  if (!gameData) return null;

  const { player1Name, player2Name, player1History, player2History } = gameData;

  return (
    <div className="animation-container">
      <h2>Game Playing</h2>
      {currentRound < 10 ? (
        <div className="round-display">
          <h3>Round {currentRound + 1}</h3>
          <div className="players">
            <div className={`player ${player1History[currentRound]}`}>
              <img src={characterImages[player1Name]} alt={player1Name} className="character-image" />
              <strong>{player1Name}</strong>
              <p className="action-text">{player1History[currentRound]}</p>
            </div>
            <div className={`player ${player2History[currentRound]}`}>
              <img src={characterImages[player2Name]} alt={player2Name} className="character-image" />
              <strong>{player2Name}</strong>
              <p className="action-text">{player2History[currentRound]}</p>
            </div>
          </div>
        </div>
      ) : (

        <div className="animation-end">
          <h3>Game Over</h3>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
