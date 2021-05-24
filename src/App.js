import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DogProvider } from './contexts/DogContext'
import Home from './pages/Home'
import SingleDog from './pages/SingleDog'
import './App.css';

function App() {
  return (
    <Router>
          <DogProvider>
            <Switch>
              <Route exact path={["/", "/dogs"]}>
                  <Home />
              </Route>
              <Route path="/dogs/:slug">
                  <SingleDog />
              </Route>
                  <Route path="*">
                      <h1>This is a 404</h1>
                  </Route>
            </Switch>
          </DogProvider>
    </Router>
  );
}

export default App;
