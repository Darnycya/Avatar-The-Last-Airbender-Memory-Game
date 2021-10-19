import React from 'react';
import { Link } from 'react-router-dom';


import './HomePage.css'


export default function HomePage() {
  
    return (
      <div className="main">
        <h1>AVATAR: THE LAST AIRBENDER MEMORY GAME</h1>
        <div className="objective">
        <p><i>To be played on Desktop or Tablet.</i></p>
        <p> Objective: Click a card to flip it over and click another to try to find its match. Once you have found all pairs you have won the game. Use the timer to keep track of how fast you can complete the game!</p>
        </div>
        <Link to="/gamepage"><button className="homepage-button"><p className="button-font">Enter</p></button></Link>
  
          
      </div>
    )
  }


