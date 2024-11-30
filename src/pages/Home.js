import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (

    <div className="home">
      
      <h1>Welcome to the Prisoner's Dilemma Game</h1>
      <button
        className="btn btn-primary start-button"
        onClick={() => navigate('/select-player-1')}
      >
        Start Game
      </button>
    </div>
  );
}
