import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (dataStorage) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App uD={dataStorage}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

export { renderEntireTree }