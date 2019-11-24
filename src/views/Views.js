import React, { useState, useContext } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionContext } from '../components/TransitionContext';
import Contact from '../modules/Contact';
import Sidebar from '../modules/Sidebar';
import Home from './Home/Home';
import Project from './Project/Project';

export default withRouter(function Views({
    location: {
        pathname,
    },
}) {

    const projectInPathname = !!pathname.match(/\/.+/);

    const [projectIsSelected, setProjectIsSelected] = useState(projectInPathname);

    const {
        transitioningOut,
        transitioningIn,
        push,
        duration,
    } = useContext(TransitionContext);

    const selectProject = projectName => {
        const name = projectName.replace(/\s+/g, '');
        setProjectIsSelected(!!name);
        push(`/${name}`);
    }

    return (
        <div
            id="App"
            className={`${
                projectIsSelected ? 'project-selected' : ''
                } ${
                transitioningOut ? 'transitioning-out' : ''
                }`}
            style={{
                transition: `background-color ${duration / 2000}s`,
            }}
        >
            <Switch>
                <Route
                    path="/:projectName"
                    render={props => (
                        <Project
                            {...props}
                            selectProject={selectProject}
                        />
                    )}
                />
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
            </Switch>
            <Contact />
            <Sidebar />
        </div>
    );
});
