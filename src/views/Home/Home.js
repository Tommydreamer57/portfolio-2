import React from 'react';
import About from './About';
import Landing from './Landing';
import Work from './Work';
import Contact from './Contact';

export default function Home() {
    return (
        <>
            <Landing />
            <About />
            <Work />
            <Contact />
        </>
    );
}
