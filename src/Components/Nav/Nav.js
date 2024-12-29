import React from 'react';
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
          {isPaused ? <img alt="play-logo" className="play-logo" src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png"></img> : <img alt="pause-logo" className="pause-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8Fj86hvAb9q6mbi9pWJU1ZNjmA8MDrWxcA&s"></img>}
          
          </button>
          </div>
      </div>
  );
}
