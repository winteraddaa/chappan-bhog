import React from 'react';
import SweetCard from '../components/SweetCard';
import { menuItems } from '../data';
import './BestSellers.css';

const BestSellers = () => {
    const bestSellers = menuItems.filter(item => item.bestSeller);

    return (
        <div className="best-sellers-page fade-in">
            <section className="page-header gold-bg">
                <div className="container">
                    <h1 className="brand-font">Our Best Sellers</h1>
                    <p>Handpicked favorites that our customers love the most.</p>
                </div>
            </section>

            <section className="container section-padding">
                <div className="products-grid">
                    {bestSellers.map(item => (
                        <SweetCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BestSellers;
