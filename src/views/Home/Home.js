import React from 'react';
import About from './About';
import Landing from './Landing';
import Work from './Work';
import useScrollPosition from '../../hooks/use-scroll-position';

export default function Home() {

    useScrollPosition('Home');

    return (
        <>
            <Landing />
            <About />
            <Work />
        </>
    );
}
