import "./CategorySection.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CategorySection = ({ title }) => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    loadCategoryNews();
  }, [title]);

  const loadCategoryNews = async () => {

    try {

      const response = await axios.get(
        `https://nation-news-backend.onrender.com/api/news/category/${title}`
      );

      setNews(response.data.content);

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <section className="category-section">

      <div className="section-header">

        <h2>{title}</h2>

        <button>View All</button>

      </div>

      <div className="category-grid">

        {news.map((item) => (

          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="category-card"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
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

            <div className="category-content">

              <h3>{item.title}</h3>

              <p>
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

};

export default CategorySection;