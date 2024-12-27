import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import './MyStopwatch.css';

export default function MyStopwatch({ setStartFunction }) {
  const { seconds, minutes, hours, start } = useStopwatch({ autoStart: false });

  // Pass the start function to the parent component
  useEffect(() => {
    if (setStartFunction) {
      setStartFunction(start);
    } else {
      console.error("setStartFunction is not defined");
    }
  }, [setStartFunction, start]);

  return (
    <div className="div-timer">
      <div className="timer-div">
        <span>{String(hours).padStart(2, '0')}:</span>
        <span>{String(minutes).padStart(2, '0')}:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
