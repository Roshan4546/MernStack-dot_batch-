import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function usegif(initialTag = "") {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async (tag = initialTag) => {
        try {
            setLoading(true);

            if (!API_KEY) {
                console.error("❌ Missing API key! Add VITE_GIPHY_API_KEY to your .env file");
                return;
            }

            const url = tag
                ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
                : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

            const response = await axios.get(url);

            // safely extract GIF URL with fallback
            const gifUrl =
                response.data?.data?.images?.downsized_large?.url ||
                response.data?.data?.image_url ||
                "";

            setGif(gifUrl);
        } catch (error) {
            console.error("Error fetching GIF:", error.message);
            setGif(""); // fallback to empty
        } finally {
            setLoading(false);
        }
    }, [initialTag]);

    // fetch once when component mounts or when initialTag changes
    useEffect(() => {
        fetchData(initialTag);
    }, [fetchData, initialTag]);

    return { gif, loading, fetchData };
}

export default usegif;
