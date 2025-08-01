import React, { useEffect, useState } from "react";
import { apiUrl } from "../data";
import Card from "./Card";
import "./Cards.css";

function Cards({ selectedCategory }) {
    const [courses, setCourses] = useState({});
    const [likedCourses, setlikedCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                const loadedCourses = data.data;

                // ✅ Inject category into each course
                const updatedCourses = {};
                for (const category in loadedCourses) {
                    updatedCourses[category] = loadedCourses[category].map(course => ({
                        ...course,
                        category: category
                    }));
                }

                setCourses(updatedCourses);
            } catch (err) {
                console.error("Fetch error:", err);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    // ✅ Combine all course arrays
    function getFilteredCourses() {
        const allCourses = Object.values(courses).flat();

        // console.log("Available course categories:", allCourses.map(c => c.category));
        // console.log("Selected filter category:", selectedCategory);

        if (selectedCategory === "All") return allCourses;

        return allCourses.filter(
            (course) =>
                course.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );
    }

    return (
        <div className="cards-container">
            {loading ? (
                <p>Loading...</p>
            ) : getFilteredCourses().length === 0 ? (
                <p>No courses found for this category.</p>
            ) : (
                getFilteredCourses().map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setlikedCourses={setlikedCourses}
                    />
                ))
            )}
        </div>
    );
}

export default Cards;
