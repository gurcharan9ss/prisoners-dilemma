import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Results.css";
import Loader from "../components/Loader";

import img1 from "../images/im.png";
import img2 from "../images/sw1.png";
import img3 from "../images/ca.png";
import img4 from "../images/loki.png";
import img5 from "../images/dp1.png";

export default function Results({ gameData }) {
  const navigate = useNavigate();

  const images = {
    "Iron Man": img1,
    "Scarlet Witch": img2,
    "Captain America": img3,
    "Loki": img4,
    "Deadpool": img5,
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="results">
      <h1>Game Results</h1>
      <div className="players-results">
        {/* Player 1 */}
        <div className="player-result">
          <h2>Player 1</h2>
          <img
            src={images[gameData.player1]}
            alt={`Player 1 - ${gameData.player1}`}
            className="character-img"
          />
          <p>
            <strong>Name:</strong> {gameData.player1}
          </p>
          <p>
            <strong>Score:</strong> {gameData.player1Score}
          </p>
          <p>
            <strong>Cooperate Count:</strong> {gameData.player1CooperateCount}
          </p>
          <p>
            <strong>Defect Count:</strong> {gameData.player1DefectCount}
          </p>
        </div>

        {/* Player 2 */}
        <div className="player-result">
          <h2>Player 2</h2>
          <img
            src={images[gameData.player2]}
            alt={`Player 2 - ${gameData.player2}`}
            className="character-img"
          />
          <p>
            <strong>Name:</strong> {gameData.player2}
          </p>
          <p>
            <strong>Score:</strong> {gameData.player2Score}
          </p>
          <p>
            <strong>Cooperate Count:</strong> {gameData.player2CooperateCount}
          </p>
          <p>
            <strong>Defect Count:</strong> {gameData.player2DefectCount}
          </p>
        </div>
      </div>

      <div className="results-buttons">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/graph")}
        >
          View Graph
        </button>
      </div>
    </div>
  );
}
