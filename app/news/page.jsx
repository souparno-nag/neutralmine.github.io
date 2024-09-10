"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const API_KEY = 'YOUR_NEWSAPI_KEY'; // Replace with your actual NewsAPI key

const MiningNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch news data when the component mounts
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=mining&apiKey=a2aa00785e1f4321bc0ce60a73b74e56`
                );

                if (!response.ok) {
                    throw new Error('Error fetching the news');
                }

                const data = await response.json();
                setArticles(data.articles); // Set fetched articles
                setLoading(false); // Set loading to false
            } catch (error) {
                setError('Error fetching the news');
                setLoading(false);
            }
        };

        fetchNews(); // Fetch the news when the component mounts
    }, []); // Empty dependency array ensures this runs only once

    // Conditional rendering: show loading, error, or news articles
    return (
        <div>
            <h1>Latest Mining News</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <ul>
                    {articles.map((article, index) => (
                        <div className="flex gap-3 " key={index}>
                            <Image src={article.urlToImage} width={300} height={300} alt={article.title} />
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="text-3xl">{article.title}</div>
                                    <div className="text-gray-400">{article.description}</div>
                                    <div>{article.source.name}</div>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">

                                        Read more
                                    </a>
                                </div></div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};




export default MiningNews