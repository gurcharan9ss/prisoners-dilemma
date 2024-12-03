import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import '../css/Glow-button.css';
import ironMan from '../images/im.png';
import scarletWitch from '../images/sw1.png';
import captainAmerica from '../images/ca.png';
import loki from '../images/loki.png';
import deadpool from '../images/dp1.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="heading">Prisoner's Dilemma Game</h1>
      
      <div className="characters">
        <img src={ironMan} alt="Iron Man" className="character-img" />
        <img src={scarletWitch} alt="Scarlet Witch" className="character-img" />
        <img src={captainAmerica} alt="Captain America" className="character-img" />
        <img src={loki} alt="Loki" className="character-img" />
        <img src={deadpool} alt="Deadpool" className="character-img" />
      </div>
      <br />

      <button
        className="glowing-btn"
        onClick={() => navigate('/select-player-1')}
      >
        <span class='glowing-txt'>P<span class='faulty-letter'>l</span>ay<span class='faulty-letter'> G</span>ame</span>
      </button>
    </div>
  );
}
