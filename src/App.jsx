import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import BestSellers from './pages/BestSellers';
import About from './pages/About';
import OrderOnline from './pages/OrderOnline';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/best-sellers" element={<BestSellers />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/order" element={<OrderOnline />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
