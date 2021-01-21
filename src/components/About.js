import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id='para'
        data-aos='fade-up'
        data-aos-offset='250'
        data-aos-delay='100'
        data-aos-duration='800'
        data-aos-easing='ease'
      >
        <h1 className='section-title'>
          {' '}
          <small> (001) </small> WHO AM I?
        </h1>
      </div>

      <div
        id='para'
        data-aos='fade-up'
        data-aos-offset='250'
        data-aos-duration='800'
        data-aos-easing='ease'
      >
        <h2>
          {' '}
          Hello<small>,</small>I'm Neelesh.{' '}
        </h2>
        <p>
          I’m a bachelors student in <span>Computer Science</span>. An
          innovative Web Developer and Open Source Contributor. A creative
          thinker, adept in software development, and working with various data
          structures.
          {/*  Seeking a beginner role to enhance and explore my
          technical knowledge gained at Amity University in the last three
          years. */}
        </p>
      </div>

      <div
        id='para'
        data-aos='fade-up'
        data-aos-duration='800'
        data-aos-offset='250'
        data-aos-easing='ease'
      >
        <p>
          I create projects under the notion that <small>“</small>less is more
          <small>”</small> and my work reflects my addiction for minimal and
          clean design as well as my desire to push boundaries.
        </p>
      </div>

      {/* <div
        id='para'
        data-aos='fade-up'
        data-aos-duration='800'
        data-aos-offset='250'
        data-aos-easing='ease'
      > */}
      {/* <p>
          I am currently learning Redux and Jest to further my <span>back</span>{' '}
          front-end focus while developing my concept of Honne into a native
          mobile application using <span>Swift</span> React Native.
        </p> */}
      {/* </div> */}

      <div
        id='para'
        data-aos='fade-up'
        data-aos-offset='250'
        data-aos-duration='800'
        data-aos-easing='ease'
      >
        <p>
          My aim is to take coding into the <span>fifth</span> professional
          dimension where I hope to bring value and continously grow myself.
        </p>
      </div>

      <div
        id='para'
        data-aos='fade-up'
        data-aos-offset='250'
        data-aos-duration='800'
        data-aos-easing='ease'
      >
        <p>
          When I'm not coding<small>,</small> you can either find me playing
          <span>football</span>
          <small>,</small> or reading books about <span>astronomy</span>...
        </p>
      </div>
    </>
  );
};

export default About;
