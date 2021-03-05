import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Main from "./Main";







class App extends Component {

  
  

  render() {
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
}

export default App;
