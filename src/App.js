import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './views/Home/Home';
import Contact from './views/Home/Contact';
import Project from './views/Project/Project';

export default function App() {
    return (
        <BrowserRouter>
            <div id="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/:projectName"
                        component={Project}
                    />
                </Switch>
                <Contact />
            </div>
        </BrowserRouter>
    );
}
