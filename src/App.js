import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Contact from './modules/Contact';
import Sidebar from './modules/Sidebar';
import Home from './views/Home/Home';
import Project from './views/Project/Project';

export default withRouter(function App({ history, location: { pathname } }) {

    const projectInPathname = !!pathname.match(/\/.+/);

    const [projectSelected, setProject] = useState(projectInPathname);

    const selectProject = projectName => {
        setProject(!!projectName);

        setTimeout(() => {
            const name = projectName.replace(/\s+/g, '');
            history.push(`/${name}`);
        }, 250);
    }

    return (
        <div
            id="App"
            className={projectSelected ? 'project-selected' : ''}
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
