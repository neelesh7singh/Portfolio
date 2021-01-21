import React, { useEffect, useState } from 'react';
import hoverEffect from 'hover-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const [projContainer, setProjContainer] = useState([
    '.trek',
    // '.honne',
    '.kap',
    '.fin',
    // '.pac',
  ]);

  useEffect(() => {
    AOS.init();

    new hoverEffect({
      parent: document.querySelector('#honne-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/2HgFJDD.png',
      image2: 'https://i.imgur.com/uENHP3X.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 2.25,
    });

    new hoverEffect({
      parent: document.querySelector('#kap-image'),
      intensity: 0.4,
      image1: './fa_pic1.png',
      image2: './fa_pic2.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 0.5,
    });

    new hoverEffect({
      parent: document.querySelector('#trek-image'),
      intensity: 0.4,
      image1: './pf_pic1.png',
      image2: './pf_pic2.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 0.5,
    });

    new hoverEffect({
      parent: document.querySelector('#fin-image'),
      intensity: 0.4,
      image1: './ai_pic1.png',
      image2: './ai_pic2.png',
      displacementImage: 'https://i.imgur.com/CyxD9X6.png',
      speedIn: 1.5,
      speedOut: 1.5,
      angle: Math.PI / 8,
      imagesRatio: 0.5,
    });

    new hoverEffect({
      parent: document.querySelector('#pac-image'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/kXiOi5j.png',
      image2: 'https://i.imgur.com/SbYPbw4.png',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg',
      speedIn: 1.5,
      speedOut: 1.5,
      angle: Math.PI / 5,
      imagesRatio: 1.17,
    });

    const containers = projContainer.map((el) =>
      document.querySelector(el + '-container')
    );
    let currentPos = window.pageYOffset;
    const distort = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.05;

      containers.map((el) => (el.style.transform = `skewY(${speed}deg)`));
      currentPos = newPos;
      requestAnimationFrame(distort);
    };
    distort();
  }, []);

  const show = (e) => {
    e.target.firstChild.innerText = 'CLICK TO EXPLORE APP 🧐';
  };

  const remove = (e) => {
    const images = [
      'trek-image',
      'honne-image',
      'kap-image',
      'fin-image',
      'pac-image',
    ];
    const dates = ['03.06.20', '15.04.20', '24.03.20', '11.03.20', '20.01.20'];

    images.map((el, i) =>
      e.target.id === el ? (e.target.firstChild.innerText = dates[i]) : null
    );
  };

  return (
    <>
      <div
        id='para'
        data-aos='fade-up'
        data-aos-duration='800'
        data-aos-easing='ease'
        data-aos-offset='200'
      >
        <h1 className='section-title'>
          {' '}
          <small> (002) </small> Recent Work{' '}
        </h1>
      </div>

      <h5 className='text-slider'>
        <span>
          - PATHFINDING VISUALIZER - PATHFINDING VISUALIZER - PATHFINDING
          VISUALIZER - PATHFINDING VISUALIZER - PATHFINDING VISUALIZER -
          PATHFINDING VISUALIZER - PATHFINDING VISUALIZER - PATHFINDING
          VISUALIZER - PATHFINDING VISUALIZER - PATHFINDING VISUALIZER -
          PATHFINDING VISUALIZER - PATHFINDING VISUALIZER - PATHFINDING
          VISUALIZER - PATHFINDING VISUALIZER - PATHFINDING VISUALIZER -
          PATHFINDING VISUALIZER -
        </span>
      </h5>

      <div className='trek-container'>
        <a
          href='https://neelesh7singh.github.io/Pathfinding-Visualizer/'
          target='_blank'
        >
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-duration='800'
            data-aos-easing='ease'
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id='trek-image'
          >
            <p> 03.06.20 </p>
          </div>
        </a>
        <img
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='800'
          data-aos-easing='ease'
          src='https://i.imgur.com/NyOmmN7.png'
          alt=''
        />

        <div
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='1000'
          data-aos-easing='ease'
          id='proj-text'
        >
          <h1> Pathfinding Visualizer </h1>
          <div></div>
          <p>
            {' '}
            <small> PRJ CONCPT </small> <br />A visualization tool for various
            pathfinding algorithms. I built this application because I was
            fascinated by pathfinding algorithms, and I wanted to visualize them
            in action. I hope that you enjoy playing around with this
            visualization tool just as much as I enjoyed building it.
            {/* <br /> <br />
            Trek is not currently live but is in the early stages of development
            and below are the first mockups and drafts of the application.
            Please visit the GitHub repository to follow the progression of the
            app. */}
          </p>
          <br />
          <small> SkILLS BEING IMPLEMENTED</small>
          <ul>
            <li> JavaScript (ES6) </li>
            <li> HTML5 </li>
            <li> CSS Animation</li>
            <li> JQUERY </li>
            <li> Depth First Search </li>
            <li> Breadth First Search</li>
            <li> Dijkstra</li>
            <li> A* </li>
            <li> Recursive Division </li>
          </ul>
          <br />
          <a href='https://github.com/neelesh7singh/Pathfinding-Visualizer'>
            <ion-icon name='logo-github'></ion-icon> VIEW REPO{' '}
          </a>
        </div>
        <svg id='circle-1' width='23vw' height='23vw' className='circle'>
          <circle cx='11.5vw' cy='11.5vw' r='11.4vw' />
        </svg>
        <div className='arrow'></div>
      </div>

      <h5 className='text-slider'>
        <span>
          - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
          AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
          AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
          AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
        </span>
      </h5>

      <div className='fin-container'>
        <a
          href='https://github.com/neelesh7singh/Agar.io-Clone'
          target='_blank'
        >
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-duration='800'
            data-aos-easing='ease'
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id='fin-image'
          >
            <p> 11.03.20 </p>
          </div>
        </a>
        <img
          id='fin-imageTwo'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='800'
          data-aos-easing='ease'
          src='https://i.imgur.com/8jmRsRA.png'
          alt=''
        />

        <div
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='1000'
          data-aos-easing='ease'
          id='proj-text'
        >
          <h1> AGAR.IO CLONE </h1>
          <p>
            {' '}
            <small> PRJ CONCPT </small> <br />
            I made a clone of the game Agar.io. Agar.io is a massively
            multiplayer online action game. Players control one or more circular
            cells in a map representing a Petri dish.
            <br /> <br />I could not host this game online as no free cloud
            services provides web sockets. You can clone and play the game on
            localhost.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> HTML CANVAS </li>
            <li> JavaScript (ES6)</li>
            <li> NODE </li>
            <li> WEBSOCKETS </li>
            <li> HTML5/SASS </li>
            <li> Axios </li>
          </ul>
          <br />
          <a href='https://github.com/neelesh7singh/Agar.io-Clone'>
            <ion-icon name='logo-github'></ion-icon> VIEW REPO{' '}
          </a>
        </div>

        <svg id='circle-1' width='23vw' height='23vw' className='circle'>
          <circle cx='11.5vw' cy='11.5vw' r='11.4vw' />
        </svg>
        <div className='arrow'></div>
      </div>

      {/* <h5 className='text-slider'>
        <span>
          - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
          AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
          AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
          AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE - AGAR.IO CLONE -
        </span>
      </h5>

      <div className='honne-container'>
        <div
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='1000'
          data-aos-easing='ease'
          id='proj-text'
        >
          <h1> AGAR.IO CLONE </h1>
          <p>
            {' '}
            <small> PRJ CONCPT </small> <br />
            I made a clone of the game Agar.io. Agar.io is a massively
            multiplayer online action game. Players control one or more circular
            cells in a map representing a Petri dish.
            <br /> <br />I could not host this game online as no free cloud
            services provides web sockets. You can clone and play the game on
            localhost.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> HTML CANVAS </li>
            <li> JavaScript (ES6)</li>
            <li> NODE </li>
            <li> WEBSOCKETS </li>
            <li> HTML5/SASS </li>
            <li> Axios </li>
          </ul>
          <br />
          <a href='https://github.com/neelesh7singh/Agar.io-Clone'>
            <ion-icon name='logo-github'></ion-icon> VIEW REPO{' '}
          </a>
        </div>
        <a
          href='https://github.com/neelesh7singh/Agar.io-Clone'
          target='_blank'
        >
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-duration='800'
            data-aos-easing='ease'
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id='honne-image'
          >
            <p> 15.04.20 </p>
          </div>
        </a>
      </div> */}

      <h5 className='text-slider'>
        <span>
          - FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI -
          FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI -
          FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI -
          FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI - FLAPPY BIRD AI -
        </span>
      </h5>

      <div className='kap-container'>
        <a
          href='https://neelesh7singh.github.io/flappy-bird-ai/'
          target='_blank'
        >
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-duration='800'
            data-aos-easing='ease'
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id='kap-image'
          >
            <p> 24.03.20 </p>
          </div>
        </a>
        <img
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='800'
          data-aos-easing='ease'
          src='https://i.imgur.com/MYtlWlw.png'
          alt=''
        />
        <div
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='1000'
          data-aos-easing='ease'
          id='proj-text'
        >
          <h1> FLAPPY BIRD AI </h1>
          <div></div>
          <p>
            {' '}
            <small> PRJ CONCPT </small> <br />
            An AI for the game flappy bird which I coded myself. The AI was
            created by using NEAT algorithm and a neural network library which I
            coded myself.
            {/* <br /> <br />
            KAP was designed to bring people together through the sharing of
            ideas. The app utilises CRUD operations giving users power to manage
            their uploaded content. */}
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Node.js </li>
            <li> Express.js</li>
            <li> HTML5/SASS </li>
            <li> GreenSock Animation Platform </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> Nodemailer </li>
          </ul>
          <br />
          <a href='https://github.com/neelesh7singh/flappy-bird-ai'>
            <ion-icon name='logo-github'></ion-icon> VIEW REPO{' '}
          </a>
        </div>
        <svg id='circle-1' width='23vw' height='23vw' className='circle'>
          <circle cx='11.5vw' cy='11.5vw' r='11.4vw' />
        </svg>
        <div className='arrow'></div>
      </div>

      {/* <h5 className='text-slider'>
        <span>
          - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER -
          FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER - FINANCIER
          - FINANCIER - FINANCIER - FINANCIER -
        </span>
      </h5>

      <div className='fin-container'>
        <a href='http://seangpachareonsub.com/financier/' target='_blank'>
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-duration='800'
            data-aos-easing='ease'
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id='fin-image'
          >
            <p> 11.03.20 </p>
          </div>
        </a>
        <img
          id='fin-imageTwo'
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='800'
          data-aos-easing='ease'
          src='https://i.imgur.com/8jmRsRA.png'
          alt=''
        />

        <div
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-duration='1000'
          data-aos-easing='ease'
          id='proj-text'
        >
          <h1> Financier </h1>
          <p>
            {' '}
            <small> PRJ CONCPT </small> <br />
            A paired production of a React front-end application consuming a
            public API. Financier aims to bridge together the most relevant
            global news and updated CryptoCurrency market prices.
            <br /> <br />
            The application's interface allows users to browse as well as search
            for specific news articles and is equipped with a user interactive
            CryptoCurrency price chart.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> HTML5/SASS </li>
            <li> Moment.js</li>
            <li> Axios </li>
            <li> New York Times API </li>
            <li> CoinGecko API </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/financier'>
            <ion-icon name='logo-github'></ion-icon> VIEW REPO{' '}
          </a>
        </div>

        <svg id='circle-1' width='23vw' height='23vw' className='circle'>
          <circle cx='11.5vw' cy='11.5vw' r='11.4vw' />
        </svg>
        <div className='arrow'></div>
      </div>

      <h5 className='text-slider'>
        <span>
          - PACMAN - PACMAN - PACMAN - PACMAN - PACMAN - PACMAN - PACMAN -
          PACMAN - PACMAN - PACMAN - PACMAN - PACMAN - PACMAN - PACMAN -
        </span>
      </h5>

      <div className='pac-container'>
        <a
          href='http://seangpachareonsub.com/pac-man/src/index.html'
          target='_blank'
        >
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-duration='800'
            data-aos-easing='ease'
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id='pac-image'
          >
            <p> 20.01.20 </p>
          </div>
        </a>
        <div
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-duration='1000'
          data-aos-easing='ease'
          id='proj-text'
        >
          <h1> Pac-Man</h1>
          <p>
            {' '}
            <small> PRJ CONCPT </small> <br />
            An individual recreation of the popular grid based game, Pac-Man.
            The game consists of two different maps that mimics and aims to keep
            the authenticity of the original game. Players play against the
            clock and points are recorded on a score leader board on game end.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> JavaScript (ES6) </li>
            <li> HTML5/CSS </li>
          </ul>
          <br />
          <a href='https://github.com/seangpachareonsub/pacman'>
            <ion-icon name='logo-github'></ion-icon> VIEW REPO{' '}
          </a>
        </div>
      </div> */}

      <h6> More projects coming soon ... </h6>
    </>
  );
};

export default Projects;
