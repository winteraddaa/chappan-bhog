import React, { useState } from 'react';
import SweetCard from '../components/SweetCard';
import { menuItems } from '../data';
import './Menu.css';

const Menu = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(menuItems.map(item => item.category))];

    const filteredItems = filter === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === filter);

    return (
        <div className="menu-page fade-in">
            <section className="page-header">
                <div className="container">
                    <h1 className="brand-font">Our Traditional Menu</h1>
                    <p>Explore our wide range of authentic Indian sweets and snacks.</p>
                </div>
            </section>

            <section className="menu-section container section-padding">
                <div className="filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredItems.map(item => (
                        <SweetCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Menu;
