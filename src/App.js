import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TopBanner from './components/TopBanner';
import Menu from './components/Menu';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 875) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <div className="App">
                <TopBanner />
                <Menu handleToggle={handleToggle} isOpen={isOpen} setIsOpen={setIsOpen} />
                <Routes>
                    <Route path="/" element={<Home isOpen={isOpen} />} />
                    <Route path="projects/" element={<Projects />} />
                    <Route path="contact/" element={<Contact />} />
                    <Route path="privacy-policy/" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <ToastContainer position="top-left" />
            </div>
        </Router>
    );
}

export default App;
