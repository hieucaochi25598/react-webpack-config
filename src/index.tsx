import React from 'react';
import { createRoot } from 'react-dom/client';
import TestComponent from './test';

const container = document.getElementById('root');
const root = createRoot(container);

const App: React.FC = () => {
    return (
        <div>
            <TestComponent />
        </div>
    );
};

root.render(<App />);
