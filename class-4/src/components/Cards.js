import React, { useState } from "react";
import Card from "./Card";
import './Cards.css'
function Cards(props) {
    let allCourses = props.course;
    
    const [likedCourses, setlikedCourses] = useState([]);

    // Flatten nested course categories into a single array
    if (courses) {
        Object.values(courses).forEach((coursesCategory) => {
            coursesCategory.forEach((course) => {
                allCourses.push(course);
            });
        });
    }

    return (
        <div className="cards-container">
            {allCourses.map((course, index) => (
                <Card key={index} course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses} />
            ))}
        </div>
    );
}

export default Cards;
