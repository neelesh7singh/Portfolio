import React from 'react'
import '../styles/works.scss'

function Works() {
    return (
        <div className= 'workSection'>
            <div className= 'line'></div>
            <h3 className= 'title'>MY WORK</h3>
            <div className = 'project'>
                <h2 className = 'project-title'>Pathfinding Visualizer</h2>
                <p className = 'project-skills'>
                    HTML &nbsp;&nbsp;&nbsp; 
                    CSS &nbsp;&nbsp;&nbsp; 
                    JAVASCRIPT &nbsp;&nbsp;&nbsp; 
                    JQUERY &nbsp;&nbsp;&nbsp; 
                    PATHFINDING ALGORITHMS
                </p>
            </div>
            <div className = 'project right'>
                <h2 className = 'project-title'>Flappy Bird AI</h2>
                <p className = 'project-skills'>
                    HTML &nbsp;&nbsp;&nbsp; 
                    CSS &nbsp;&nbsp;&nbsp; 
                    JAVASCRIPT &nbsp;&nbsp;&nbsp; 
                    p5.js &nbsp;&nbsp;&nbsp; 
                    NEURAL NETWORK &nbsp;&nbsp;&nbsp; 
                    GENETIC ALGORITHMS
                </p>
            </div><div className = 'project'>
                <h2 className = 'project-title'>2D Self-Driving Car</h2>
                <p className = 'project-skills'>
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
