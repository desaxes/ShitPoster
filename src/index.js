import reportWebVitals from './reportWebVitals';
import { store } from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

renderEntireTree(); 
store.subscribe(renderEntireTree);
reportWebVitals();

