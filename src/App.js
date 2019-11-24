import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Contact from './modules/Contact';
import Sidebar from './modules/Sidebar';
import Home from './views/Home/Home';
import Project from './views/Project/Project';

export default withRouter(function App({ history }) {

    const selectProject = projectName => {
        const name = projectName.replace(/\s+/g, '');
        history.push(`/${name}`);
    }

    return (
        <div id="App">
            <Switch>
                <Route exact path="/" render={props => (
                    <Home
                        {...props}
                        selectProject={selectProject}
                    />
                )} />
                <Route path="/:projectName" render={props => (
                    <Project
                        {...props}
                        selectProject={selectProject}
                    />
                )} />
            </Switch>
            <Contact />
            <Sidebar />
        </div>
    );
});
