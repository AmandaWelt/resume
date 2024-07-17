import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Home from './pages/Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
