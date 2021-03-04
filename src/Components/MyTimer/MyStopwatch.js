import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import './MyStopwatch.css';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
  <div style={{textAlign: 'center'}}>
      <div className="div-timer">
        <span>{hours}:</span><span>{minutes}:</span><span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button className="timer" onClick={start}>Start</button>
      <button className="timer" onClick={pause}>Pause</button>
      <button className="timer" onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}