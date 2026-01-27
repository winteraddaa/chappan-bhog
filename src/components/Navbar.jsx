import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <span className="brand-font">Chappan Bhog</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/menu" onClick={() => setIsOpen(false)}>Menu</NavLink>
                    <NavLink to="/best-sellers" onClick={() => setIsOpen(false)}>Best Sellers</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    <NavLink to="/order" className="nav-cta" onClick={() => setIsOpen(false)}>Order Online</NavLink>
                </div>

                <div className="nav-actions">
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <MenuIcon />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
