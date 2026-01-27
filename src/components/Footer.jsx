import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="brand-font">Chappan Bhog</h2>
                        <p>Bringing the authentic taste of tradition to your doorstep with love and purity since decades.</p>
                        <div className="social-links">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Our Menu</Link></li>
                            <li><Link to="/best-sellers">Best Sellers</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/order">Order Online</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><MapPin size={18} /> 45, Mithai Gali, Sweet Market, Sector 15</li>
                            <li><Phone size={18} /> +91 98765 43210</li>
                            <li><Mail size={18} /> orders@chappanbhog.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Chappan Bhog. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
