import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container);

const App: React.FC = () => {
    return <div className="app-title">React-App</div>;
};

root.render(<App />);
