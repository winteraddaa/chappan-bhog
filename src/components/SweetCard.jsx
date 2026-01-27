import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SweetCard.css';

const SweetCard = ({ item }) => {
    return (
        <div className="sweet-card">
            <div className="card-image">
                <img src={item.image} alt={item.name} />
                {item.bestSeller && <span className="badge">Best Seller</span>}
            </div>
            <div className="card-info">
                <h3>{item.name}</h3>
                <p className="category">{item.category}</p>
                <p className="description">{item.description}</p>
                <div className="card-footer">
                    <span className="price">₹{item.price} <small>/ kg</small></span>
                    <Link to="/order" className="add-to-cart">
                        <ShoppingCart size={18} />
                        <span>Order</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SweetCard;
