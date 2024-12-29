import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ isShowing, hide, scores }) => {
  const convertTimeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const sortedScores = [...scores].sort((a, b) => {
    return convertTimeToSeconds(a.time) - convertTimeToSeconds(b.time);
  });

  const topScores = sortedScores.slice(0, 6);

  if (!isShowing) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h1 className="scoreboard-header">Scoreboard</h1>
          <div className="scoreboard-list">
            <div className="scoreboard-header-row">
              <span className="scoreboard-column">Name</span>
              <span className="scoreboard-column">Time</span>
            </div>
            {topScores.map((score, index) => (
              <div className="scoreboard-row" key={index}>
                <span className="scoreboard-column">{score.name}</span>
                <span className="scoreboard-column">{score.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
