import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransitionProvider from './components/TransitionContext';
import './index.scss';
import Views from './views/Views';

const initialDuration = 5000;
const minDuration = 1000;

export default function App() {
    const [duration, setDuration] = useState(initialDuration);
    useEffect(() => {
        setTimeout(() => setDuration(1750), initialDuration);
    }, []);
    return (
        <BrowserRouter>
            <TransitionProvider
                duration={duration}
                minDuration={minDuration}
            >
                <Views />
            </TransitionProvider>
        </BrowserRouter>
    );
}
