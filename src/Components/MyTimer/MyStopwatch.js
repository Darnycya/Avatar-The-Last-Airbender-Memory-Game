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
      <div className="timer-div">
        <span>{hours}:</span><span>{minutes}:</span><span>{seconds}</span>
      </div>
      <div className="button-div">
      <img className="timer-button" alt="play" onClick={start} src="https://res.cloudinary.com/darnycya/image/upload/v1635909257/Play_rrzfp3.png"/>
      <img className="timer-button" alt="pause" onClick={pause} src="https://res.cloudinary.com/darnycya/image/upload/v1635909257/Pause_xopdxv.png"/>
      <img className="timer-button" alt="stop" onClick={reset} src="https://res.cloudinary.com/darnycya/image/upload/v1635909257/Stop_xzeszr.png"/>
      </div>
    </div>
  );
}

