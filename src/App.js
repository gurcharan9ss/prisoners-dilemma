import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import About from './pages/About';
import PlayerSelection from './pages/PlayerSelection';
import GameSetup from './components/GameSetup';
import Results from './pages/Results';
import Graph from './pages/Graph';
import Loader from './components/Loader';
import GameAnimation from './components/GameAnimation';

export default function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [rounds, setRounds] = useState(0);
  const [gameData, setGameData] = useState({});
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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/select-player-1"
          element={<PlayerSelection setPlayer={setPlayer1} isPlayer1={true} />}
        />
        <Route
          path="/select-player-2"
          element={<PlayerSelection setPlayer={setPlayer2} isPlayer1={false} />}
        />
        <Route
          path="/game"
          element={
            <GameSetup
              player1={player1}
              player2={player2}
              setRounds={setRounds}
              setGameData={setGameData}
            />
          }
        />
        <Route
          path="/animation"
          element={
            <GameAnimation
              player1={player1}
              player2={player2}
              rounds={rounds}
              gameData={gameData}
              setGameData={setGameData}
            />
          }
        />
        <Route path="/results" element={<Results gameData={gameData} />} />
        <Route path="/graph" element={<Graph gameData={gameData} />} />
      </Routes>
    </Router>
  );
}
