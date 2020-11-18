import React, {useRef, useEffect} from 'react'
import { TweenMax } from "gsap";
import '../styles/banner.scss'


const Banner = () => {
    let h = useRef(null);
    let i = useRef(null);
    let portfolio = useRef(null);
    // let line = useRef(null);
    // let loader = useRef(null);
    useEffect(() => {
        TweenMax.from(portfolio, 1.5, {y: -100, opacity: 0, ease: "power4.out", delay:3.4});
        // TweenMax.from(line, 2, {x: '-100%'});
        // TweenMax.to(loader, 1, {opacity: 0, display: 'none', delay:2});
        // TweenMax.to(line, 1, {opacity: 0, display: 'none', delay:2});
        TweenMax.staggerFrom(
            [h, i],
            1,
            { opacity: 0, y: 400, ease: "power4.out", delay:3.4},
            0.07
          );
    },[])
    return (
        <>
        {/* <div className = 'loader' ref = {(el) => (loader = el)}>
            <div className="line" ref = {(el) => (line = el)}/>
        </div> */}
        <div className = 'banner'>
        <div className = "top-bar" ref = {(el) => (portfolio = el)}>
            <p >Portfolio.</p>
        </div>
        <div className = "hi">
            <h1 ref={(el) => (h = el)}>H</h1>
            <h1 ref={(el) => (i = el)}>I</h1>
        </div>
        </div>
        </>
    )
}

export default Banner
