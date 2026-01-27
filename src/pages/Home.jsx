import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Truck } from 'lucide-react';
import SweetCard from '../components/SweetCard';
import { menuItems } from '../data';
import './Home.css';

const Home = () => {
    const featuredSweets = menuItems.filter(item => item.bestSeller).slice(0, 3);

    return (
        <div className="home-page fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h4 className="brand-font saffron-text">Traditional Indian Mithai</h4>
                    <h1>Tradition Served Fresh Daily</h1>
                    <p>Experience the authentic sweetness of heritage with Chappan Bhog. Every bite is a journey through time, crafted with the finest ingredients and love.</p>
                    <div className="hero-btns">
                        <Link to="/order" className="btn btn-primary">Order Online</Link>
                        <Link to="/menu" className="btn btn-outline-white">Explore Menu</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section-padding container">
                <div className="feature-item">
                    <Star className="feature-icon" />
                    <h3>Premium Quality</h3>
                    <p>We use only the finest natural ingredients and pure ghee.</p>
                </div>
                <div className="feature-item">
                    <Clock className="feature-icon" />
                    <h3>Always Fresh</h3>
                    <p>Baked and prepared daily to ensure the highest standards of taste.</p>
                </div>
                <div className="feature-item">
                    <Truck className="feature-icon" />
                    <h3>Doorstep Delivery</h3>
                    <p>Specialized handling for local delivery within the city.</p>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="brand-font">Our Best Sellers</h2>
                        <div className="underline"></div>
                        <p>Customer favorites that define our heritage.</p>
                    </div>
                    <div className="products-grid">
                        {featuredSweets.map(item => (
                            <SweetCard key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/best-sellers" className="btn btn-secondary">
                            View All Best Sellers <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="brand-font">Ready to sweeten your moments?</h2>
                        <p>Order now and get fresh delivery at your doorstep.</p>
                        <Link to="/order" className="btn btn-primary">Place Your Order</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
