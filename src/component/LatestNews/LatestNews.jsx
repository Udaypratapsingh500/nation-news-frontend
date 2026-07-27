import "./LatestNews.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const LatestNews = () => {

  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {

      const response = await axios.get(
        "http://localhost:8080/api/news"
      );

      setLatestNews(response.data.content);

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <section className="latest-news">

      <div className="section-title">
        <h2>Latest News</h2>
      </div>

      <div className="latest-grid">

        {latestNews.map((item) => (

          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="latest-card"
          >

            <img
              src={
                item.imageUrl
                  ? `http://localhost:8080${item.imageUrl}`
                  : "https://placehold.co/600x400?text=No+Image"
              }
              alt={item.title}
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/600x400?text=No+Image";
              }}
            />

            <div className="latest-content">

              <span className="category">
                {item.category?.name}
              </span>

              <h3>{item.title}</h3>

              <p>
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>

              <span className="read-more">
                Read Full Story →
              </span>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

};

export default LatestNews;