import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Board from "./Components/Board/Board";
import "./App.css";

export default function App() {
  const [inputName, setInputName] = useState(() => {
    const savedName = localStorage.getItem("playerName");
    return savedName ? { name: savedName } : { name: "" };
  });

  const [time, setTime] = useState(0); // Timer state in seconds
  const [formattedTime, setFormattedTime] = useState("00:00:00"); // Formatted time for display
  const [isPaused, setIsPaused] = useState(false); // Pause state
  const [intervalId, setIntervalId] = useState(null); // Timer interval ID
  const [isGameStarted, setIsGameStarted] = useState(false); // Track if game has started

  // Format the time in hh:mm:ss format
  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const hours = Math.floor(minutes / 60);
    setFormattedTime(
      `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`
    );
  }, [time]);

  const startTimer = () => {
    if (intervalId) return; // Prevent multiple intervals if already running
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Increment time
    }, 1000);
    setIntervalId(id);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    clearInterval(intervalId); // Stop the interval
    setIntervalId(null); // Clear the interval ID
  };

  const resumeTimer = () => {
    if (intervalId) return; // Avoid starting a new interval if one is already running
    setIsPaused(false);
    startTimer(); // Start a new timer if paused
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    localStorage.setItem("playerName", inputName.name);
  }, [inputName]);

  return (
    <>
      <Route path="/" exact>
        <div className="main">
          <h1>AVATAR: THE LAST AIRBENDER MEMORY GAME</h1>
          <div className="objective">
            <p>
              Objective: Click a card to flip it over and click another to try
              to find its match. Once you have found all pairs, you have won the
              game. You can also use the timer to see how fast you can complete
              the game.
            </p>
            <div className="submit-container">
              <input
                type="text"
                value={inputName.name}
                onChange={(e) =>
                  setInputName({ ...inputName, name: e.target.value })
                }
                placeholder="Enter name"
                className="player-name"
              />
              <Link to="/gamepage">
                <button className="homepage-button">
                  <p className="button-font">Submit</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/gamepage">
        <Nav
          name={inputName.name}
          formattedTime={formattedTime}
          isPaused={isPaused}
          pauseTimer={pauseTimer}
          resumeTimer={resumeTimer}
          time={time}
        />
        <Board
          startTimer={startTimer}
          stopTimer={stopTimer}
          isGameStarted={isGameStarted}
          setIsGameStarted={setIsGameStarted}
          pauseTimer={pauseTimer}
          isPaused={isPaused}
          resumeTimer={resumeTimer}
          setIsPaused={setIsPaused}
          setTime={setTime}
          formattedTime={formattedTime}
        />
      </Route>
    </>
  );
}
