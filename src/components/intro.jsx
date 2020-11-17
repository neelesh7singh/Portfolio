import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../styles/intro.scss'

const Intro = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    },[])
    return (
        <div data-aos='fade-up' className = 'intro'>
            <p className ='part-1'>
            I’m Neelesh Singh, a bachelors student in Computer Science. An innovative Web Developer and Open Source Contributor.
            </p>
        </div>
    )
}

export default Intro