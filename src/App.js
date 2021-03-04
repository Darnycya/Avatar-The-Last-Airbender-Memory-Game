import React from 'react'
import { Route } from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage"
import Main from "./Main"
import MyTimer from './Components/MyTimer/MyStopwatch';



function App() {
  return (
    <>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/gamepage">
      <MyTimer />
        <Main />
      </Route>
      
    </>
  );
}

export default App;
