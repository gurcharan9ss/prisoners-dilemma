import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import '../css/Graph.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Graph({ gameData }) {
  const navigate = useNavigate();

  const data = {
    labels: [gameData.player1, gameData.player2, 'Cooperations', 'Defections'],
    datasets: [
      {
        label: 'Game Statistics',
        data: [
          gameData.player1Score,
          gameData.player2Score,
          gameData.player1CooperateCount + gameData.player2CooperateCount,
          gameData.player1DefectCount + gameData.player2DefectCount,
        ],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="graph-page">
      <h1>Game Statistics</h1>
      <Bar data={data} options={options} className='graph-size' />
      <div className="graph-buttons">
        <button className="btn btn-primary" onClick={() => navigate('/results')}>
          Back to Results
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
