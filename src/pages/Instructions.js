import React from 'react';

export default function Instructions() {
  return (
    <div className="instructions container py-5">
      <h2 className="display-4 text-center mb-4">Welcome to the Prisoner's Dilemma Game!</h2>
      <p className="lead text-center mb-5">
        A strategic game of cooperation and defection where you and your opponent make critical decisions to maximize your rewards.
      </p>

      {/* Game Flow Section */}
      <section className="mb-5">
        <h3 className="mb-4">Game Flow:</h3>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">1. Choose Your Strategy</h5>
                <ul>
                  <li>You will be able to choose from 5 pre-implemented strategies to play against another player.</li>
                  <li>The available strategies are inspired by the famous Axelrod Tournament. These strategies will dictate how your player behaves during the rounds.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2. Select Opponent Strategy</h5>
                <ul>
                  <li>After choosing your own strategy, you will select an opponent's strategy from the available options.</li>
                  <li>Your opponent can either be human or AI (automated based on the selected strategy).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">3. Set Number of Rounds</h5>
                <ul>
                  <li><strong>Manual Entry:</strong> Enter the number of rounds you want to play (e.g., 10, 50, etc.).</li>
                  <li><strong>Random Selection:</strong> Alternatively, allow the game to randomly select a number of rounds (between 100 and 1000).</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">4. Gameplay</h5>
                <ul>
                  <li>In each round, both players will secretly choose to Cooperate or Defect.</li>
                  <li>After both players make their choices, the payoff for each player will be revealed.</li>
                  <li>The game continues for the specified number of rounds, based on each player's strategy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">5. Scoring</h5>
                <ul>
                  <li>Your score is determined by the total rewards accumulated over all rounds.</li>
                  <li>The higher your rewards, the better your overall score.</li>
                  <li>You’ll see the total score for both players at the end, along with a round-by-round summary.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Strategies Overview */}
      <section className="mb-5">
        <h3 className="mb-4">Game Strategies Overview:</h3>
        <div className="row">
          {[
            {
              title: "Tit-for-Tat",
              description: "Start by cooperating. Then mimic your opponent’s last move. This strategy encourages mutual cooperation and retaliation for defection.",
            },
            {
              title: "Grim Trigger",
              description: "Start by cooperating. If your opponent defects even once, defect for the rest of the game. This strategy punishes defection severely.",
            },
            {
              title: "Always Cooperate",
              description: "Always cooperate, no matter what your opponent does. This strategy promotes mutual cooperation but is vulnerable to exploitation by defectors.",
            },
            {
              title: "Always Defect",
              description: "Always defect, regardless of your opponent’s choice. This strategy guarantees safety from being exploited but leads to low rewards for both players.",
            },
            {
              title: "Random",
              description: "Randomly chooses whether to cooperate or defect in each round. This strategy is unpredictable and may lead to varied results.",
            }
          ].map((strategy, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{strategy.title}</h5>
                  <p className="card-text">{strategy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Winning and Scoring */}
      <section className="mb-5">
        <h3 className="mb-4">Winning and Scoring:</h3>
        <p>At the end of the game, the player with the highest total score wins. The scoring is based on the following reward structure:</p>
        <ul>
          <li><strong>Both Cooperate:</strong> Each player receives 3 points.</li>
          <li><strong>One Cooperates, One Defects:</strong> The cooperator receives 0 points, and the defector receives 5 points.</li>
          <li><strong>Both Defect:</strong> Each player receives 1 point.</li>
        </ul>
        <p>Your final score will reflect your total accumulated points over all rounds.</p>
      </section>

      {/* Customizing Your Experience */}
      <section>
        <h3 className="mb-4">Customizing Your Experience:</h3>
        <ul>
          <li><strong>Strategy Selection:</strong> Choose from 5 different strategies to compete against your opponent.</li>
          <li><strong>Rounds:</strong> Decide how many rounds you'd like to play. You can select a custom number or let the game randomly select the rounds (between 100 and 1000).</li>
          <li><strong>Opponent Selection:</strong> Play against a human or an AI, using the strategy of your choice.</li>
        </ul>
      </section>

      <hr />
      <h3 className="text-center">Start playing and see if you can outsmart your opponent with the best strategy!</h3>
    </div>
  );
}
