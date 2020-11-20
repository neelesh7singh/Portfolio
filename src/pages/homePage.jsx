import React, { useRef, useEffect } from 'react'
import Banner from '../components/banner.jsx'
import Intro from '../components/intro.jsx';
import Works from '../components/works.jsx';
import Skill from '../components/skill.jsx';
import Contact from '../components/contact.jsx';
import Preloader from '../components/preloader.jsx';
// import SkewScrolling from '../components/skewScrolling.jsx';
import Cursor from '../cursor';
function HomePage(props) {
  let c = useRef(null);
  const app = useRef(null);
  // console.log(prop);
  useEffect(() => {
    new Cursor(c);
  }, [])

    return (
    <>
    <Preloader />
    <div ref={app} className="App">
      <div className="cursor" ref={(el) => (c = el)} />
      {/* <SkewScrolling> */}
        <Banner />
        <Intro />
        <Works {...props}/>
        <Skill />
        <Contact />
      {/* </SkewScrolling> */}
    </div>
    </>
    )
}

export default HomePage
