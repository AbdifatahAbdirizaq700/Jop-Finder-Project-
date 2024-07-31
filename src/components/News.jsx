// src/pages/News.jsx
import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/everything?q=job%20market&apiKey=cd2de0bcc94949c2acd769e64f1a0450");
      const result = await response.json();
      setArticles(result.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Latest News</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div key={index} className="w-full rounded-lg shadow-lg overflow-hidden">
            <img
              className="object-cover w-full h-48"
              src={article.urlToImage || "https://via.placeholder.com/400"}
              alt="Article"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">
                {article.title}
              </h3>
              <p className="text-gray-700 my-2">
                {article.description}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
