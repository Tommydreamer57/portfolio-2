import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import TransitionProvider from './components/TransitionContext';
import './index.scss';

ReactDOM.render((
    <BrowserRouter>
        <TransitionProvider>
            <App />
        </TransitionProvider>
    </BrowserRouter>
), document.getElementById('root'));
