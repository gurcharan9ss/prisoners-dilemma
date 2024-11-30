import React from 'react';

export default function About() {
  return (
    <div className="about container py-5">
      <div className="bg-secondary p-5 rounded text-center shadow">
        <h2 className="display-4 fw-bold">About the Game</h2>
        <p className="lead mt-3">
          Dive into the fascinating world of the Prisoner's Dilemma, one of the most influential concepts in game theory. 
          Explore strategy, decision-making, and the balance between cooperation and competition.
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">The Origins</h5>
              <p className="card-text">
                Introduced in 1950 by Albert W. Tucker and Ruth M. Schuster, the Prisoner's Dilemma examines how individuals
                and groups interact under conditions of mutual interdependence and conflicting interests.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">Key Strategies</h5>
              <p className="card-text">
                Strategies like Tit-for-Tat showcase how cooperation can emerge through mutual trust, even when defection 
                might seem more rational. Explore these dynamics and test them in the game.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-secondary text-center fw-bold">Why Play the Prisoner's Dilemma Game?</h3>
        <p className="text-center mt-3">
          This game brings the rich history of game theory to life. Through simulation and strategy testing, you’ll
          understand how these decisions work in theory and real-world scenarios.
        </p>
        <ul className="list-group list-group-flush mt-4">
          <li className="list-group-item">
            <i className="bi bi-arrow-right-circle-fill text-primary"></i> Explore scenarios in international relations, diplomacy, and environmental issues.
          </li>
          <li className="list-group-item">
            <i className="bi bi-arrow-right-circle-fill text-primary"></i> Understand evolutionary biology and social behavior.
          </li>
          <li className="list-group-item">
            <i className="bi bi-arrow-right-circle-fill text-primary"></i> Test strategies like Tit-for-Tat and Iterated Prisoner's Dilemma.
          </li>
        </ul>
      </div>
    </div>
  );
}

