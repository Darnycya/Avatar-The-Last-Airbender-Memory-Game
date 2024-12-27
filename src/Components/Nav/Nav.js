import React, { useEffect } from 'react';
import './Nav.css';

export default function Nav({
  name,
  formattedTime,
  isPaused,
  pauseTimer,
  resumeTimer,
  time
}) {

  const handlePauseResume = () => {
    if (isPaused) {
      resumeTimer();
    } else {
      pauseTimer();
    }
  };

  return (
    <div className="navbar">
        <h1 className="welcome-text">
          Hi {name}! Let's begin.
        </h1>

        <div className='timer-container'>
        <h2 className="timer">{formattedTime}</h2>
        <button onClick={handlePauseResume} className="pause-button">
          {isPaused ? 'Resume' : 'Pause'}
          </button>
          </div>
      </div>
  );
}
