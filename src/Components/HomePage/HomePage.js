import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css'


export default function HomePage() {
  
    return (
      <div className="main">
        <h1>Welcome to Avatar: The Last Airbender Memory Game</h1>
        <p> Objective: Click a card to flip it over and try to find its match. Once you have found all pairs you have won the game.</p>
        
        <Link to="/gamepage"><button className="homepage-button">Enter</button></Link>
  
          
      </div>
    )
  }


