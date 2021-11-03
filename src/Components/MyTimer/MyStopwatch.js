import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import './MyStopwatch.css';

export default function MyStopwatch(props) {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
  <div className="div-timer" style={{textAlign: 'center'}}>
      <div>
        <span>{hours}:</span><span>{minutes}:</span><span>{seconds}</span>
      </div>
      
      <button className="timer-start" onClick={start}>Start</button>
      <button className="timer-pause" onClick={pause}>Pause</button>
      <button className="timer-reset" onClick={reset}>Reset</button>
    
    </div>
  );
}

