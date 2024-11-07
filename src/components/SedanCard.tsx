import React from 'react';
import '../css/sedan_card.css';
import '../css/shared_card.css';
import '../css/container.css';
const SedanCard = () => {
    return (
        <div className="card card--sedans">
            <div className="card_icon">
                <img src='src/image/icons-sedan.svg' alt="icon-sedans" width="64" height="40" />
            </div>
            <h2 className="card__title">SEDANS</h2>
            <p className="card__description">
                Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
            </p>
            <button className="card_button card_button--sedans">Learn More</button>
        </div>
    );
}

export default SedanCard;