import React, { useState } from 'react';
import { menuItems } from '../data';
import { CheckCircle, Send } from 'lucide-react';
import './OrderOnline.css';

const OrderOnline = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        item: '',
        quantity: '1',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <div className="order-online-page container section-padding text-center fade-in">
                <div className="confirmation-card">
                    <CheckCircle size={80} color="#a52a2a" />
                    <h2 className="brand-font">Order Confirmed!</h2>
                    <p>Thank you, {formData.name}. We have received your order for {formData.quantity}kg of {formData.item}.</p>
                    <p>Our delivery partner will reach out to you at {formData.phone} shortly.</p>
                    <button className="btn btn-primary mt-4" onClick={() => setSubmitted(false)}>Place Another Order</button>
                </div>
            </div>
        );
    }

    return (
        <div className="order-online-page fade-in">
            <section className="page-header">
                <div className="container">
                    <h1 className="brand-font">Order Online</h1>
                    <p>Get your favorite sweets delivered fresh to your doorstep.</p>
                </div>
            </section>

            <section className="order-section container section-padding">
                <div className="order-container">
                    <div className="order-info">
                        <h2 className="brand-font">Delivery Details</h2>
                        <p>Please fill out the form below. We currently deliver within the city limits with a standard delivery time of 2-4 hours.</p>

                        <div className="delivery-perks">
                            <div className="perk">
                                <strong>Fast Delivery</strong>
                                <p>Freshly packed and delivered within 4 hours.</p>
                            </div>
                            <div className="perk">
                                <strong>Pure Ghee</strong>
                                <p>Every item is cooked in 100% pure desi ghee.</p>
                            </div>
                            <div className="perk">
                                <strong>Contactless</strong>
                                <p>Safe and hygienic contactless delivery available.</p>
                            </div>
                        </div>
                    </div>

                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Enter your mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Delivery Address</label>
                            <textarea
                                name="address"
                                required
                                placeholder="Complete address with landmarks"
                                value={formData.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Select Sweet</label>
                                <select name="item" required value={formData.item} onChange={handleChange}>
                                    <option value="">Choose an item</option>
                                    {menuItems.map(item => (
                                        <option key={item.id} value={item.name}>{item.name} - ₹{item.price}/kg</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Quantity (kg)</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    min="0.5"
                                    step="0.5"
                                    required
                                    value={formData.quantity}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Notes (Optional)</label>
                            <textarea
                                name="notes"
                                placeholder="Any special instructions for the kitchen or delivery"
                                value={formData.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            <Send size={18} /> Confirm Order
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default OrderOnline;
