import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { withRouter } from 'react-router-dom';

export const TransitionContext = createContext();

export default withRouter(function TransitionProvider({
    duration = 1000,
    history,
    children,
}) {
    const [transitioningOut, setTransitioningOut] = useState(false);
    const [transitioningIn, setTransitioningIn] = useState(false);

    const push = newPath => {
        setTransitioningOut(true);

        setTimeout(() => {
            history.push(newPath);
            setTransitioningOut(false);
            setTransitioningIn(true);
            setTimeout(() => {
                setTransitioningIn(false);
            }, duration / 2);
        }, duration / 2);
    }

    return (
        <TransitionContext.Provider
            value={{
                transitioningOut,
                transitioningIn,
                push,
                duration,
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
    } = useContext(TransitionContext);

    useEffect(() => {
        const durationMs = Math.random() * transitionDuration * 0.75;
        const delayMs = Math.random() * (transitionDuration * 0.25 - durationMs);

        duration.current = attributes.map(attr => `${attr} ${durationMs / 1000}s`).join(', ');
        delay.current = `${delayMs / 1000}s`;
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
