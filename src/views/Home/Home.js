import React from 'react';
import useScrollPosition from '../../hooks/use-scroll-position';
import About from './modules/About';
import Greeting from './modules/Greeting';
import Work from './modules/Work';

export default function Home({ selectProject }) {

    useScrollPosition('Home');

    return (
        <>
            <Greeting />
            <About />
            <Work selectProject={selectProject} />
        </>
    );
}
