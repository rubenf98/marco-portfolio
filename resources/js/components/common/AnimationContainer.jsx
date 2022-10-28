import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function AnimationContainer({ animation, animateOnce = true, delay = 0, children }) {
    return (
        <ScrollAnimation animateIn={animation} animateOnce={animateOnce} delay={delay}>
            {children}
        </ScrollAnimation>
    )
}

export default AnimationContainer
