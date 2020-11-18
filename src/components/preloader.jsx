import React, { useEffect, useRef } from 'react'
import { TweenMax } from "gsap";
import './../styles/preloader.scss'

function Preloader() {
    let line = useRef(null);
    let loader = useRef(null);
    useEffect(() => {
        TweenMax.from(line, 2, {x: '-100%'});
        TweenMax.to(line, .4, {height: '100vh', delay:2, ease: 'power4.easeIn'});
        TweenMax.to(line, .5, {x: '100%', delay:2.5, ease: 'power4.easeIn'});
        TweenMax.to(line, 1, {opacity: 0, display: 'none', delay:3});
        TweenMax.to(loader, 1, {opacity: 0, display: 'none', delay:3});
    },[])
    return (
        <div className = 'loader' ref = {(el) => (loader = el)}>
            <div className="line" ref = {(el) => (line = el)}/>
        </div>
    )
}

export default Preloader
