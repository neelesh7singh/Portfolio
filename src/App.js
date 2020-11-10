import React, { useRef, useEffect } from 'react';
import Cursor from './cursor';
import './styles/App.scss';
import Banner from './components/banner.jsx'
import Intro from './components/intro.jsx';
import Works from './components/works.jsx';

function App() {
  let c = useRef(null);
  useEffect(() => {
    new Cursor(c);
  }, [])

  return (
    <div className="App">
      <div className="cursor" ref={(el) => (c = el)} />
      <Banner />
      <Intro />
      <Works />
    </div>
  );
}

export default App;
