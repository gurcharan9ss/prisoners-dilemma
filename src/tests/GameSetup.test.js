import React from 'react';
import { render, screen } from '@testing-library/react';
import GameSetup from '../components/GameSetup';

// Mock data for testing
const mockStrategies = {
  "Iron Man": (opponentHistory) => {
    if (opponentHistory.length === 0) return 'Cooperate';
    return opponentHistory[opponentHistory.length - 1] === 'Cooperate' ? 'Cooperate' : 'Defect';
  },
  "Scarlet Witch": (opponentHistory) => {
    return opponentHistory.includes('Defect') ? 'Defect' : 'Cooperate';
  },
  "Captain America": () => 'Cooperate',
  "Loki": () => 'Defect',
  "Deadpool": () => (Math.random() > 0.5 ? 'Cooperate' : 'Defect'),
};

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

// Game simulation function
function simulateGame(player1, player2, rounds, strategies) {
  let player1Score = 0;
  let player2Score = 0;
  let player1History = [];
  let player2History = [];

  for (let i = 0; i < rounds; i++) {
    const player1Move = strategies[player1](player2History);
    const player2Move = strategies[player2](player1History);

    const [p1Points, p2Points] = payoffMatrix[player1Move][player2Move];
    player1Score += p1Points;
    player2Score += p2Points;

    player1History.push(player1Move);
    player2History.push(player2Move);
  }

  return {
    player1Score,
    player2Score,
    player1History,
    player2History,
  };
}

// Jest Test Suite
describe('Game Simulation Tests', () => {
  test('Iron Man vs Captain America', () => {
    const gameData = simulateGame('Iron Man', 'Captain America', 5, mockStrategies);
    expect(gameData.player2Score).toBe(15); // Captain America always cooperates
    expect(gameData.player1Score).toBeGreaterThanOrEqual(15);
  });

  test('Captain America vs Loki', () => {
    const gameData = simulateGame('Captain America', 'Loki', 10, mockStrategies);
    expect(gameData.player1Score).toBe(10 * 0); // Captain America gets betrayed every round
    expect(gameData.player2Score).toBe(10 * 5); // Loki defects every round
  });

  test('Scarlet Witch vs Loki', () => {
    const gameData = simulateGame('Scarlet Witch', 'Loki', 5, mockStrategies);
    expect(gameData.player1Score).toBeLessThan(gameData.player2Score);
    expect(gameData.player1History.includes('Defect')).toBe(true); // Scarlet Witch reacts to defections
  });

  test('Deadpool vs Loki', () => {
    const gameData = simulateGame('Deadpool', 'Loki', 100, mockStrategies);
    expect(gameData.player1History.every((move) => ['Cooperate', 'Defect'].includes(move))).toBe(
      true
    ); // Random behavior from Deadpool
    expect(gameData.player2History.every((move) => move === 'Defect')).toBe(true); // Loki defects every round
  });

  test('Iron Man vs Iron Man', () => {
    const gameData = simulateGame('Iron Man', 'Iron Man', 10, mockStrategies);
    expect(gameData.player1Score).toBe(30); // Always cooperates after first round
    expect(gameData.player2Score).toBe(30);
  });

  test('Zero Rounds', () => {
    const gameData = simulateGame('Iron Man', 'Scarlet Witch', 0, mockStrategies);
    expect(gameData.player1Score).toBe(0);
    expect(gameData.player2Score).toBe(0);
    expect(gameData.player1History).toEqual([]);
    expect(gameData.player2History).toEqual([]);
  });

  test('Single Round - Loki vs Captain America', () => {
    const gameData = simulateGame('Loki', 'Captain America', 1, mockStrategies);
    expect(gameData.player1Score).toBe(5); // Loki defects
    expect(gameData.player2Score).toBe(0); // Captain America cooperates
  });

  test('Invalid Player Strategy', () => {
    expect(() => simulateGame('InvalidPlayer', 'Captain America', 5, mockStrategies)).toThrow(
      'Invalid strategy for players: InvalidPlayer, Captain America'
    );
  });

  test('Large Number of Rounds', () => {
    const gameData = simulateGame('Captain America', 'Deadpool', 1000, mockStrategies);
    expect(gameData.player1Score).toBeGreaterThan(0); // Cooperation from Captain America
    expect(gameData.player2Score).toBeLessThanOrEqual(5000); // Randomized behavior from Deadpool
  });

  test('Edge Case - Equal Strategies', () => {
    const gameData = simulateGame('Scarlet Witch', 'Scarlet Witch', 10, mockStrategies);
    expect(gameData.player1Score).toBe(30); // Mutual cooperation until defect
    expect(gameData.player2Score).toBe(30);
  });
});

describe('GameSetup UI Tests', () => {
  test('renders GameSetup component', () => {
    render(
      <GameSetup
        player1="Iron Man"
        player2="Scarlet Witch"
        setRounds={() => {}}
        setGameData={() => {}}
      />
    );
    expect(screen.getByText(/Game Setup/i)).toBeInTheDocument();
    expect(screen.getByText(/Player 1: Iron Man/i)).toBeInTheDocument();
    expect(screen.getByText(/Player 2: Scarlet Witch/i)).toBeInTheDocument();
  });

  test('displays player images and names correctly', () => {
    render(
      <GameSetup
        player1="Captain America"
        player2="Loki"
        setRounds={() => {}}
        setGameData={() => {}}
      />
    );
    expect(screen.getByText(/Player 1: Captain America/i)).toBeInTheDocument();
    expect(screen.getByText(/Player 2: Loki/i)).toBeInTheDocument();
  });
});
