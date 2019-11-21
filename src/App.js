import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './views/Home/Home';

export default function App() {

    return (
        <div id="App">
            <Home />
            <Sidebar />
        </div>
    );
}
