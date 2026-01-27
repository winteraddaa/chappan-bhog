import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page fade-in">
            <section className="page-header">
                <div className="container">
                    <h1 className="brand-font">Our Story</h1>
                    <p>A legacy of sweetness, tradition, and uncompromising quality.</p>
                </div>
            </section>

            <section className="about-content container section-padding">
                <div className="about-grid">
                    <div className="about-image">
                        <img src="/src/assets/festive-box.png" alt="Chappan Bhog Heritage" />
                    </div>
                    <div className="about-text">
                        <h2 className="brand-font">Tradition in Every Bite</h2>
                        <p>Started with a vision to bring the authentic flavors of Indian heritage to every household, Chappan Bhog has grown into a beloved brand known for its purity and taste.</p>
                        <p>We believe that sweets are not just food; they are an emotion, a part of our celebrations, and a way to share love. That's why we use only the most premium ingredients, from handpicked cashews to pure saffron and 100% pure desi ghee.</p>
                        <p>Our artisans follow age-old recipes passed down through generations, ensuring that every piece of Mithai we serve carries the soul of tradition.</p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>30+</h3>
                                <p>Years of Legacy</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Pure Ingredients</p>
                            </div>
                            <div className="stat-item">
                                <h3>50k+</h3>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section section-padding">
                <div className="container text-center">
                    <h2 className="brand-font">Our Promise</h2>
                    <div className="underline"></div>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Freshness</h3>
                            <p>Every product is made fresh daily in our kitchens to ensure the most vibrant flavors.</p>
                        </div>
                        <div className="value-item">
                            <h3>Authenticity</h3>
                            <p>We strictly adhere to traditional recipes that have stood the test of time.</p>
                        </div>
                        <div className="value-item">
                            <h3>Hygienic</h3>
                            <p>The highest standards of cleanliness and safety are maintained throughout our process.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
