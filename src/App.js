import React from 'react'
import { Route } from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage"
import Main from "./Main"



function App() {
  return (
    <>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/gamepage">
        <Main />
      </Route>
    </>
  );
}

export default App;
