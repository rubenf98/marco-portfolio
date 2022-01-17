import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function AnimationContainer({ animation, animateOnce = true, children }) {
    return (
        <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
            {children}
        </ScrollAnimation>
    )
}

export default AnimationContainer
