import React, { useState, useEffect, useRef } from 'react';
import { Link, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Board from './Components/Board/Board';
import './App.css';

export default function App() {
  const [inputName, setInputName] = useState(() => {
    // Retrieve the saved name from localStorage or set default
    const savedName = localStorage.getItem('playerName');
    return savedName ? { name: savedName } : { name: '' };
  });

  const startRef = useRef(null);

  const setStartFunction = (startFunction) => {
    startRef.current = startFunction;
  };

  const startTimer = () => {
    if (startRef.current) {
      startRef.current(); // Call the start function from the timer
    }
  };

  // Save the inputName to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('playerName', inputName.name);
  }, [inputName]);

  return (
    <>
      <Route path="/" exact>
        <div className="main">
          <h1>AVATAR: THE LAST AIRBENDER MEMORY GAME</h1>
          <div className="objective">
            <p><i>To be played on Desktop or Tablet.</i></p>
            <p>
              Objective: Click a card to flip it over and click another to try to find its match. 
              Once you have found all pairs, you have won the game. You can also use the timer to 
              see how fast you can complete the game.
            </p>
            <input
              type="text"
              value={inputName.name}
              onChange={(e) => setInputName({ ...inputName, name: e.target.value })}
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
      </Route>
      <Route path="/gamepage">
        <Nav startTimer={startTimer} setStartFunction={setStartFunction} {...inputName} />
        <Board startTimer={startTimer} />
      </Route>
    </>
  );
}
