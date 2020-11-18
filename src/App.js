import React, { useRef, useEffect } from 'react';
import Cursor from './cursor';
import './styles/App.scss';
import Banner from './components/banner.jsx'
import Intro from './components/intro.jsx';
import Works from './components/works.jsx';
import Skill from './components/skill.jsx';
import Contact from './components/contact.jsx';
import Preloader from './components/preloader.jsx';
import useWindowSize from './useWindowSize.js';
import Particles from 'react-particles-js';



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
    const skew = velocity * 7.7;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  }

  return (
    <div ref={app} className="App">
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
              "value": 40,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 2,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
              },
              "repulse": {
                "distance": 400,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }} />
      <Preloader />
      <div className="cursor" ref={(el) => (c = el)} />
      <div ref={scrollContainer} className="scroll">
        <Banner />
        <Intro />
        <Works />
        <Skill />
        <Contact />
      </div>
    </div >
  );
}

export default App;
