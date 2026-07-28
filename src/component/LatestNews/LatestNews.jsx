import "./LatestNews.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHomeData } from "../../service/newsService";

const LatestNews = () => {

  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {

      const data = await getHomeData();

      setLatestNews(data.latestNews);

    } catch (error) {
      console.log("Latest News Error:", error);
    }
  };

  return (

    <section className="latest-news">

      <div className="section-title">
        <h2>Latest News</h2>
      </div>

      <div className="latest-grid">

        {latestNews.length > 0 ? (

          latestNews.map((item) => (

            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="latest-card"
            >

              <img
                src={
                  item.imageUrl
                    ? `https://nation-news-backend.onrender.com${item.imageUrl}`
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
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString()
                    : ""}
                </p>

                <span className="read-more">
                  Read Full Story →
                </span>

              </div>

            </Link>

          ))

        ) : (

          <h3>No News Available</h3>

        )}

      </div>

    </section>

  );

};

export default LatestNews;