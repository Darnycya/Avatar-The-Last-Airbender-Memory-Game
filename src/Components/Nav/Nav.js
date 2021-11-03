import React, {useState, useEffect} from 'react'
import MyTimer from '../MyTimer/MyStopwatch';
import './Nav.css'


export default function Nav(props) {
  const [nameState, setNameState] = useState(props)
  console.log(nameState, props, 'Cyara')

  useEffect(() => {
    setNameState(props);
  }, [props]);

  return (
    <div className="navbar">
      <div className="welcome">
        <h1 className="welcome-text">
          Hi {nameState.name}! Let's begin.
        </h1>
        </div>
      <MyTimer />
    </div>
  )
}
