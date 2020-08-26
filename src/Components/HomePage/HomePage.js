import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'


class HomePage extends Component {
 

  render() {
    return (
      <div className="main">
        <h1>Welcome to Avatar: The Last Airbender Memory Game</h1>
        <p> Objective: Click a card to flip it over and try to find its match. Once you have found all pairs you have won the game. Press Enter to begin.</p>
        
        <Link to="/gamepage"><button>Enter</button></Link>
      </div>
    )
  }
}
export default HomePage;
