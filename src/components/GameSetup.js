import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/Game.css';
import img1 from '../images/im.png';
import img2 from '../images/sw1.png';
import img3 from '../images/ca.png';
import img4 from '../images/loki.png';
import img5 from '../images/dp1.png';

export default function GameSetup({ player1, player2, setRounds, setGameData }) {
  const [rounds, setRoundsInput] = useState('');
  const navigate = useNavigate();

  // Strategy functions for each player
  const strategies = {
    "Iron Man": (opponentHistory) => {
      if (opponentHistory.length === 0) return 'Cooperate';
      return Math.random() > 0.2 ? opponentHistory[opponentHistory.length - 1] : 'Cooperate';
    },
    "Scarlet Witch": (opponentHistory) => {
      if (opponentHistory.includes('Defect')) {
        return 'Defect';
      }
      return 'Cooperate';
    },
    "Captain America": () => 'Cooperate',
    "Loki": () => {
      return Math.random() > 0.9 ? 'Cooperate' : 'Defect';
    },
    "Deadpool": () => {
      return Math.random() > 0.6 ? 'Cooperate' : 'Defect';
    },
  };

  // Payoff matrix for the game
  const payoffMatrix = {
    Cooperate: {
      Cooperate: [3, 3],
      Defect: [0, 5],
    },
    Defect: {
      Cooperate: [5, 0],
      Defect: [1, 1],
    },
  };

  // Simulate game logic
  const simulateGame = () => {
    let player1Score = 0;
    let player2Score = 0;
    let player1History = [];
    let player2History = [];
    let player1CooperateCount = 0;
    let player1DefectCount = 0;
    let player2CooperateCount = 0;
    let player2DefectCount = 0;

    for (let i = 0; i < rounds; i++) {
      if (!strategies[player1] || !strategies[player2]) {
        throw new Error(`Invalid strategy for players: ${player1}, ${player2}`);
      }

      const player1Move = strategies[player1](player2History);
      const player2Move = strategies[player2](player1History);

      if (player1Move === 'Cooperate') player1CooperateCount++;
      else player1DefectCount++;
      if (player2Move === 'Cooperate') player2CooperateCount++;
      else player2DefectCount++;

      const [p1Points, p2Points] = payoffMatrix[player1Move][player2Move];
      player1Score += p1Points;
      player2Score += p2Points;

      player1History.push(player1Move);
      player2History.push(player2Move);

      console.log(`Round ${i + 1}:`);
      console.log(`Player 1 (${player1}): ${player1Move}`);
      console.log(`Player 2 (${player2}): ${player2Move}`);
      console.log(`Scores - Player 1: ${player1Score}, Player 2: ${player2Score}`);
    }

    return {
      player1Name: player1,
      player2Name: player2,
      player1Score,
      player2Score,
      player1CooperateCount,
      player1DefectCount,
      player2CooperateCount,
      player2DefectCount,
      player1History,
      player2History,
    };
  };

  // Start the game
  const handleStartGame = () => {
    if (!rounds || rounds <= 9) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Number of rounds must be at least 10.',
      });
      return;
    }

    setRounds(Number(rounds));

    const gameData = {
      ...simulateGame(),
      player1,
      player2,
    };
    setGameData(gameData);

    // Navigate to the animation page for the first 10 rounds
    navigate('/animation');
  };

  // Generate random rounds
  const generateRandomRounds = () => {
    const randomRounds = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    setRoundsInput(randomRounds);
  };

  const playerImages = {
    "Iron Man": img1,
    "Scarlet Witch": img2,
    "Captain America": img3,
    "Loki": img4,
    "Deadpool": img5,
  };

  return (
    <div className="game">
      <h2>Game Setup</h2>
      <div className="players">
        <div className="player-info">
          <img
            src={playerImages[player1]}
            alt={`Player 1 - ${player1}`}
            className="player-image"
          />
          <h3>Player 1: {player1}</h3>
        </div>
        <div className="player-info">
          <img
            src={playerImages[player2]}
            alt={`Player 2 - ${player2}`}
            className="player-image"
          />
          <h3>Player 2: {player2}</h3>
        </div>
      </div>
      <div className="rounds">
        <label htmlFor="rounds">Enter Number of Rounds:</label>
        <input
          type="number"
          id="rounds"
          value={rounds}
          onChange={(e) => setRoundsInput(e.target.value)}
          placeholder="Enter a number"
        />
        <button className="btn btn-secondary random-button" onClick={generateRandomRounds}>
          Generate Random Rounds
        </button>
      </div>
      <button className="btn btn-primary start-button" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
}
