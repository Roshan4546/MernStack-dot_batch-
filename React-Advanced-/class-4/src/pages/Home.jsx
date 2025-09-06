import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import ProductCard from '../components/ProductCard';

const Home = () => {
    const api = "https://68bc4f520f2491613ede9d1f.mockapi.io/products";

    const [loading, setLoading] = useState(false); // use [] instead of {}
    const [posts, setPosts] = useState([]);        // same here, also corrected variable name

    async function fetchData() {
        setLoading(true);

        try {
            const res = await fetch(api);
            const data = await res.json();

            setPosts(data);  // setPosts, not setPost
        } catch (error) {
            console.log("Error fetching data:", error);
            setPosts([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-6">
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <ProductCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-red-500 font-semibold">
                    No Data found.
                </div>
            )}
        </div>
    );
};

export default Home;
