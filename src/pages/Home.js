import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import ironMan from '../images/im.png';
import scarletWitch from '../images/sw1.png';
import captainAmerica from '../images/ca.png';
import loki from '../images/loki.png';
import deadpool from '../images/dp1.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Prisoner's Dilemma Game</h1>
      <button
        className="btn btn-primary start-button"
        onClick={() => navigate('/select-player-1')}
      >
        Start Game
      </button>
      <div className="characters">
        <img src={ironMan} alt="Iron Man" className="character-img" />
        <img src={scarletWitch} alt="Scarlet Witch" className="character-img" />
        <img src={captainAmerica} alt="Captain America" className="character-img" />
        <img src={loki} alt="Loki" className="character-img" />
        <img src={deadpool} alt="Deadpool" className="character-img" />
      </div>
    </div>
  );
}
