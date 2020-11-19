import React, { useRef, useEffect } from 'react'
import Banner from '../components/banner.jsx'
import Intro from '../components/intro.jsx';
import Works from '../components/works.jsx';
import Skill from '../components/skill.jsx';
import Contact from '../components/contact.jsx';
import Preloader from '../components/preloader.jsx';
import SkewScrolling from '../components/skewScrolling.jsx';
import Cursor from '../cursor';
function HomePage() {
  let c = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    new Cursor(c);
  }, [])

    return (
    <div ref={app} className="App">
      <Preloader />
      <div className="cursor" ref={(el) => (c = el)} />
      <SkewScrolling>
        <Banner />
        <Intro />
        <Works />
        <Skill />
        <Contact />
      </SkewScrolling>
    </div>
    )
}

export default HomePage
