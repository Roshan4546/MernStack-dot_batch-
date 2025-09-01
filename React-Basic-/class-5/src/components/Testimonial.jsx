import React, { useState } from "react";
import './Testimonial.css';
import Card from "./Card";
import people from "../data";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

function Testimonial(props) {
    const [index, setIndex] = useState(0);
    const review = people; // or props.review if passed via props

    function leftShiftHandler() {
        setIndex((prevIndex) => (prevIndex - 1 + review.length) % review.length);
    }

    function rightShiftHandler() {
        setIndex((prevIndex) => (prevIndex + 1) % review.length);
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * review.length);
        // Ensure the random index is different from the current one
        while (randomIndex === index && review.length > 1) {
            randomIndex = Math.floor(Math.random() * review.length);
        }
        setIndex(randomIndex);
    }

    return (
        <div className="card-container">
            <Card review={review[index]} />

            <div className="btn">
                <button onClick={leftShiftHandler}>
                    <GrFormPreviousLink />
                </button>
                <button onClick={rightShiftHandler}>
                    <GrFormNextLink />
                </button>
            </div>

            <div className="surprise-me">
                <button onClick={surpriseHandler}>
                    Surprise me
                </button>
            </div>
        </div>
    );
}

export default Testimonial;
