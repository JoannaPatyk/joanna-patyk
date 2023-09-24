import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import TopBanner from './components/TopBanner';
import Menu from './components/Menu';

function App() {
    return (
        <Router>
            <div className="App">
                <TopBanner />
                <Menu />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="projects/" element={<Projects />} />
                    <Route path="contact/" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
