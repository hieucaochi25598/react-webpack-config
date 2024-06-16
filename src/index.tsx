import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';
import Button from '~/components/Button';

const container = document.getElementById('root');
const root = createRoot(container);

const App: React.FC = () => {
    return (
        <div className="app-title">
            <Button variant="primary">Primary Button</Button>
        </div>
    );
};

root.render(<App />);
