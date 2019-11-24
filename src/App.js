import React, { useContext, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionContext } from './components/TransitionContext';
import Contact from './modules/Contact';
import Sidebar from './modules/Sidebar';
import Home from './views/Home/Home';
import Project from './views/Project/Project';

export default withRouter(function App({
    location: {
        pathname,
    }
}) {

    const projectInPathname = !!pathname.match(/\/.+/);

    const {
        transitioningOut,
        transitioningIn,
        push,
        duration,
    } = useContext(TransitionContext);

    const selectProject = projectName => {
        const name = projectName.replace(/\s+/g, '');
        push(`/${name}`);
    }

    return (
        <div
            id="App"
            className={`${
                projectInPathname ? 'project-selected' : ''
                } ${
                transitioningOut || transitioningIn ? 'transitioning' : ''
                }`}
            style={{
                transition: `background-color ${duration / 1500}s`,
            }}
        >
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Home
                            {...props}
                            selectProject={selectProject}
                        />
                    )}
                />
                <Route
                    path="/:projectName"
                    render={props => (
                        <Project
                            {...props}
                            selectProject={selectProject}
                        />
                    )}
                />
            </Switch>
            <Contact />
            <Sidebar />
        </div>
    );
});
