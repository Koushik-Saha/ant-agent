import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import Routes from './Routes'

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
