import React from 'react'
import MyTimer from '../MyTimer/MyStopwatch';
import './Nav.css'

export default function Nav() {
  return (
    <div className="navbar">
      <div className="welcome">
        <p>Hi, Darnycya.</p>
        </div>
      <MyTimer />
    </div>
  )
}
