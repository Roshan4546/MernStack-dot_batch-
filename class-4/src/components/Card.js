// Card.js
import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import "./Card.css";

function Card({ course, likedCourses, setlikedCourses }) {
    const clickHandler = () => {
        if (likedCourses.includes(course.id)) {
            setlikedCourses((prev) => prev.filter((id) => id !== course.id));
            toast.info("Removed from liked");
        } else {
            setlikedCourses((prev) => [...prev, course.id]);
            toast.success("Added to liked");
        }
    };

    return (
        <div className="card">
            <img className="img" src={course.image.url} alt={course.title} />
            <button className="like-button" onClick={clickHandler}>
                <FcLike
                    fontSize="1.75rem"
                    style={{
                        opacity: likedCourses.includes(course.id) ? 1 : 0.3,
                        transition: "opacity 0.2s ease",
                    }}
                />
            </button>
            <div className="card-content">
                <p className="card-title">{course.title}</p>
                <p className="card-description">
                    {course.description.length > 100
                        ? course.description.substring(0, 100) + "..."
                        : course.description}
                </p>
            </div>
        </div>
    );
}

export default Card;
