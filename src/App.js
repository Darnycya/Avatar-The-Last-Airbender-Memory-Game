import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import Main from "./Main";
import './App.css'

export default function App() {
  const [inputName, setinputName] = useState({
    name: ''
  });

    return (
      <>
        <Route path="/" exact>
       <div className="main">
        <h1>AVATAR: THE LAST AIRBENDER MEMORY GAME</h1>
        <div className="objective">
        <p><i>To be played on Desktop or Tablet.</i></p>
          <p> Objective: Click a card to flip it over and click another to try to find its match. Once you have found all pairs you have won the game. You can also use the timer to see how fast you can complete the game.</p>
          <input type="text" value={inputName.inputName} onChange={(e) => setinputName({...inputName, name: e.target.value})} placeholder="Enter name" className="player-name"/>
          <Link to="/gamepage"><button className="homepage-button"><p className="button-font">Submit</p></button></Link>
        </div>
        </div>
        </Route>
        <Route path="/gamepage">
          <Nav {...inputName}/>
          <Main />

        </Route>
      
      </>
    );
};



