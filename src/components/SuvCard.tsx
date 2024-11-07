import React from 'react';
import '../css/suv_card..css';
import '../css/shared_card.css';
import '../css/container.css';
import suvIcon from '../images/icons-suvs.svg'; 

const SuvCard = () => (
    <div className="card card--suvs">
        <div className="card_icon">
            <img src='src/image/icons-suvs.svg' alt="icons-suvs.svg" width="64" height="40" />
        </div>
        <h2 className="card__title">SUVS</h2>
        <p className="card__description">
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
        </p>
        <button className="card_button card_button--suvs">Learn More</button>
    </div>
);

export default SuvCard;