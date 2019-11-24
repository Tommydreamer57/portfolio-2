import React, { useState, useEffect, useLayoutEffect, useRef, createContext, useContext } from 'react';
import { withRouter } from 'react-router-dom';

export const TransitionContext = createContext();

export default withRouter(function TransitionProvider({
    duration = 1000,
    minDuration = 250,
    history,
    children,
}) {
    const [transitioningOut, setTransitioningOut] = useState(true);
    const [transitioningIn, setTransitioningIn] = useState(false);

    const transition = () => {
        setTransitioningOut(false);
        setTransitioningIn(true);
        setTimeout(() => {
            setTransitioningIn(false);
        }, duration / 2);
    }

    useLayoutEffect(() => {
        setTimeout(transition);
    }, []);

    const push = newPath => {
        setTransitioningOut(true);

        setTimeout(() => {
            history.push(newPath);
            transition();
        }, duration / 2);
    }

    return (
        <TransitionContext.Provider
            value={{
                transitioningOut,
                transitioningIn,
                push,
                duration,
                minDuration,
            }}
        >
            {children}
        </TransitionContext.Provider>
    );
});



const attributes = ['opacity', 'box-shadow', 'border-color', 'color'];

export function TransitionConsumer({
    children,
    tagname = 'span',
}) {
    const tag = { name: tagname };

    const duration = useRef();
    const delay = useRef();

    const {
        transitioningOut,
        transitioningIn,
        duration: transitionDuration,
        minDuration,
    } = useContext(TransitionContext);

    useEffect(() => {
        const durationMs = Math.random() * (transitionDuration / 2 - minDuration) + minDuration;
        const delayMs = Math.random() * (transitionDuration - durationMs) / 2;

        duration.current = attributes.map(attr => `${attr} ${durationMs / 1000}s`).join(', ');
        delay.current = `${delayMs / 1000}s`;

        console.log({ durationMs, delayMs, duration, delay });
    }, []);

    return (
        <tag.name
            style={{
                ...transitioningIn || transitioningOut ? {
                    transition: duration.current,
                    transitionDelay: delay.current,
                } : null,
                ...transitioningOut ? {
                    opacity: 0,
                } : null,
            }}
        >
            {children}
        </tag.name>
    )
}
