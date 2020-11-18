import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../styles/works.scss'

function Works() {
    useEffect(() => {
        Aos.init({duration:1000});
    },[])
    return (
        <div className= 'workSection'>
            <div data-aos='fade-up' className= 'line'></div>
            <h3 data-aos='fade-up' className= 'title'>MY WORK</h3>
            <div data-aos='fade-up-right' className = 'project'>
                <h2 className = 'project-title'>Pathfinding Visualizer</h2>
                <p className = 'project-skills scroll'>
                    HTML &nbsp;&nbsp;&nbsp; 
                    CSS &nbsp;&nbsp;&nbsp; 
                    JAVASCRIPT &nbsp;&nbsp;&nbsp; 
                    JQUERY &nbsp;&nbsp;&nbsp; 
                    PATHFINDING ALGORITHMS
                </p>
            </div>
            <div data-aos='fade-up-left' className = 'project right'>
                <h2 className = 'project-title'>Flappy Bird AI</h2>
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
                <h2 className = 'project-title'>2D Self-Driving Car</h2>
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
    )
}

export default Works