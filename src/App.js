import React, { useRef, useEffect } from 'react';
import Cursor from './cursor';
import './styles/App.scss';
import Banner from './components/banner.jsx'
import Intro from './components/intro.jsx';
import Works from './components/works.jsx';
import Skill from './components/skill.jsx';
import Contact from './components/contact.jsx';
import useWindowSize from './useWindowSize.js';



function App() {

  const size = useWindowSize();

  let c = useRef(null);
  const app = useRef(null);
  const scrollContainer = useRef(null);

  useEffect(() => {
    new Cursor(c);
  }, [])

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
  }, [size.height])

  const skewScrolling = () => {
    //Set Current to the scroll position amount
    skewConfigs.current = window.scrollY;
    // Set Previous to the scroll previous position
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    // Set rounded to
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // Difference between
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 17;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  }

  return (
    <div ref={app} className="App">
      <div className="cursor" ref={(el) => (c = el)} />
      <div ref={scrollContainer} className="scroll">
        <Banner />
        <Intro />
        <Works />
        <Skill />
        <Contact />
      </div>
    </div>
  );
}

export default App;
