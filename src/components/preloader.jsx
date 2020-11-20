import React, { useEffect, useRef } from 'react'
import { TweenMax } from "gsap";
import './../styles/preloader.scss'

function Preloader() {
    let line = useRef(null);
    let loader = useRef(null);
    useEffect(() => {
        TweenMax.from(line, 1, {x: '-100%'});
        TweenMax.to(line, .5, {height: '100vh', delay:1, ease: 'power3.inOut'});
        TweenMax.to(line, .7, {x: '100%', delay:1.5, ease: 'power3.inOut'});
        TweenMax.to(line, 1, {opacity: 0, display: 'none', delay:2});
        TweenMax.to(loader, 1, {opacity: 0, display: 'none', delay:2});
    },[])
    return (
        <div className = 'loader' ref = {(el) => (loader = el)}>
            <div className="line" ref = {(el) => (line = el)}/>
        </div>
    )
}

export default Preloader
