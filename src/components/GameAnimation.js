import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/GameAnimation.css';

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
      <h2>Game Animation</h2>
      {currentRound < 10 ? (
        <div className="round-display">
          <h3>Round {currentRound + 1}</h3>
          <p>
            <strong>{player1Name}</strong>: {player1History[currentRound]}
          </p>
          <p>
            <strong>{player2Name}</strong>: {player2History[currentRound]}
          </p>
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
