import React, {useEffect, useRef} from 'react';
import { TweenMax } from "gsap";
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../styles/works.scss'

function Works(props) {
    let exitdiv = useRef(null);
    const handleClick = (project) => {
        console.log(props);
            exitdiv.classList.remove('App');
            exitAnimation();
            window.setTimeout(()=>{props.history.push(`/${project}`)}, 600)
        
    }
    const exitAnimation = () => {
        TweenMax.to(exitdiv, 0, {opacity:1, display:'static'});
        TweenMax.to(exitdiv, .6, {width:'100vw', ease: 'power3.inOut'});
    }

    useEffect(() => {
        Aos.init({duration:1000});
    },[])
    return (
        <>
            <div className="exitdiv" ref={(el) => {exitdiv = el}}/>
            <div className= 'workSection'>
                <div data-aos='fade-up' className= 'line'></div>
                <h3 data-aos='fade-up' className= 'title'>MY WORK</h3>
                <div data-aos='fade-up-right' className = 'project'>
                <h2 className = 'project-title' onClick={() => handleClick('project1')}>Pathfinding Visualizer</h2>
                <p className = 'project-skills scroll'>
                    HTML &nbsp;&nbsp;&nbsp; 
                    CSS &nbsp;&nbsp;&nbsp; 
                    JAVASCRIPT &nbsp;&nbsp;&nbsp; 
                    JQUERY &nbsp;&nbsp;&nbsp; 
                    PATHFINDING ALGORITHMS
                </p>
                </div>
                    <div data-aos='fade-up-left' className = 'project right'>
                    <h2 className = 'project-title' onClick={() => handleClick('project2')}>Flappy Bird AI</h2>
                    <p className = 'project-skills scroll'>
                        HTML &nbsp;&nbsp;&nbsp; 
                        CSS &nbsp;&nbsp;&nbsp; 
                        JAVASCRIPT &nbsp;&nbsp;&nbsp; 
                        p5.js &nbsp;&nbsp;&nbsp; 
                        NEURAL NETWORK &nbsp;&nbsp;&nbsp; 
                        GENETIC ALGORITHMS
                    </p>
                    </div>
                    <div data-aos='fade-up-right' className = 'project'>
                    <h2 className = 'project-title' onClick={() => handleClick('project2')}>2D Self-Driving Car</h2>
                    <p className = 'project-skills scroll'>
                        HTML &nbsp;&nbsp;&nbsp; 
                        CSS &nbsp;&nbsp;&nbsp; 
                        JAVASCRIPT &nbsp;&nbsp;&nbsp; 
                        p5.js &nbsp;&nbsp;&nbsp; 
                        TENSORFLOW.js &nbsp;&nbsp;&nbsp; 
                        GENETIC ALGORITHMS
                    </p>
                    </div>
            </div>
        </>
    )
}

export default Works