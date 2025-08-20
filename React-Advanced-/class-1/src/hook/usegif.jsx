import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function usegif(tag) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
        try {
            setLoading(true);

            const url = tag
                ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
                : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

            const output = await axios.get(url);
            setGif(output.data.data.images.downsized_large.url);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        } finally {
            setLoading(false);
        }
    }

    // fetch once when component mounts
    useEffect(() => {
        fetchData(tag);
    }, [tag]);

    return { gif, loading, fetchData };
}

export default usegif;
