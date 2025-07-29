import React from "react";
import { FcLike } from "react-icons/fc";
import './Card.css';



function Card( props ) {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.setlikedCourses;
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // previously liked
            setlikedCourses((prev) => {
                prev.filter((cid != course.id));
            });
        }
        else {
            // previously not liked
            // insert course in liked course

            if (likedCourses.length === 0) {
                setlikedCourses([course.id]);
            }
            else {
                setlikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("liked successfully");
            
        }
    }
    return (
        <div className="card">
            <div>
                <img className="img" src={course.image.url} alt={course.title} />
                <div>
                    <button className="like-button" onClick={clickHandler}>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>
            <div className="card-content">
                <p className="card-title">{course.title}</p>
                <p className="card-description">{course.description}</p>
            </div>
        </div>
    );
}

export default Card;
