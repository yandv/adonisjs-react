import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Route from './Route';

function App(props) {
    return (
        <StrictMode>
            <Route {...props} />
        </StrictMode>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App route={document.currentScript.getAttribute('route')} />);