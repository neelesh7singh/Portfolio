import React from 'react';
import './styles/App.scss';
import Background from './components/background'
import HomePage from './pages/homePage';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
