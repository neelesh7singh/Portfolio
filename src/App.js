import React from 'react';
import './styles/App.scss';
import Background from './components/background'
import HomePage from './pages/homePage';
import Project from './pages/project'
import { Switch, Route } from "react-router-dom";

function App() {
  const project1 = {
    heading: 'Pathfinding Visualizer',
    about: 'I built this project because I was fascinated by pathfinding algorithms and I wanted to visualize them in action. This project was created using only vanilla JavaScript. We can create a maze by our own or can let the website create one for us. I have implemented 4 different pathfinding algorithms: Depth First Search, Breadth First Search, Dijkstra, A*, and Recursive Division for maze generation.',
    code: 'https://github.com/neelesh7singh/Pathfinding-Visualizer',
    website: 'https://neelesh7singh.github.io/Pathfinding-Visualizer/'
  }
  const project2 = {
    heading: 'Flappy Bird AI',
    about: 'I coded a AI for Flappy Bird which I made using p5.js. The AI uses NeuroEvolution of Augmenting Topologies algorithm to learn. The birds are trained using a neural network library that I coded myself using only vanilla JavaScript.',
    code: 'https://github.com/neelesh7singh/flappy-bird-ai',
    website: 'https://neelesh7singh.github.io/flappy-bird-ai/'
  }
  const project3 = {
    heading: '2D Self-Driving Car',
    about: 'I used TensorFlow.js to train 2d cars move on a track without touching the edges. The car can get the information about the track using raycasting and the tracks are generated automatically using perlin noise.',
    code: 'https://github.com/neelesh7singh/2d-AI-cars',
    website: 'https://neelesh7singh.github.io/2d-AI-cars/'
  }
  return (
    <>
      <Background />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/project1" render={() => <Project {...project1} />} />
        <Route exact path="/project2" render={() => <Project {...project2} />} />
        <Route exact path="/project3" render={() => <Project {...project3} />} />
      </Switch>
    </>
  );
}

export default App;
