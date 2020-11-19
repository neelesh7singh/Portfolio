import React, {useEffect, useRef} from 'react'
import useWindowSize from '../useWindowSize.js';
import '../styles/skewScrolling.scss'


function SkewScrolling(props) {
  const size = useWindowSize();
  const scrollContainer = useRef(null);
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
    if(scrollContainer.current) scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  }
    return (
      <div ref={scrollContainer} className="scroll">
          {props.children}
      </div>
    )
}

export default SkewScrolling
