import React from 'react';
import '../css/luxury_car.css';
import '../css/shared_card.css';
import '../css/container.css';
import luxuryIcon from '../images/icons-luxury.svg'; 

const LuxuryCard = () => (
    <div className="card card--luxury">
        <div className="card_icon">
            <img src='src/image/icons-luxury.svg' alt="icons-luxury.svg" width="64" height="40" />
        </div>
        <h2 className="card__title">LUXURY</h2>
        <p className="card__description">
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="card_button card_button--luxury">Learn More</button>
    </div>
);

export default LuxuryCard;