import React, { useRef, useEffect } from 'react';
import Cursor from './cursor';
import './styles/App.scss';
import Banner from './components/banner.jsx'
import Intro from './components/intro.jsx';
import Works from './components/works.jsx';
import Skill from './components/skill.jsx';
import Contact from './components/contact.jsx';



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
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
