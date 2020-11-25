import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css'


export default function HomePage() {
  // const [formData, setFormData] = useState({
  //   name: "",
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })

  // }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
     
  //     props.history.push('/gamepage');
  //   }
  

  
    return (
      <div className="main">
        <h1>Welcome to Avatar: The Last Airbender Memory Game</h1>
        <p> Objective: Click a card to flip it over and try to find its match. Once you have found all pairs you have won the game.</p>
        
        <Link to="/gamepage"><button>Enter</button></Link>
        {/* <form
          // onSubmit={handleSubmit}
        >
          <input type="text"
            name="name"
            placeholder="Enter name here"
            // value={formData.name}
            // onChange={handleChange}
            />
          <button>Enter</button>
          </form> */}
          
      </div>
    )
  }


