import React from "react";
import './Card.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({ review }) {
    return (
        <div className="main-container">
            <figure className="card-img-container">
                <div className="bg"></div>
                <img src={review.image} alt={review.name} className="card-img" />
                
            </figure>

            <div className="card-content">
                <h2 className="card-name">{review.name}</h2>
                <h4 className="card-job">{review.job}</h4>

                <div className="card-quotes">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="card-text">{review.text}</p>
                    <FaQuoteRight className="quote-icon" />
                </div>
            </div>
            
        </div>
    );
}

export default Card;
