import "./Hero.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Hero = () => {

  const [featuredNews, setFeaturedNews] = useState(null);
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    loadHeroNews();
  }, []);

  const loadHeroNews = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/news"
      );

      const news = response.data.content;

      if (!news || news.length === 0) {
        return;
      }

      // Use featured news if available,
      // otherwise use the first news
      const featured =
        news.find(item => item.featured) || news[0];

      setFeaturedNews(featured);

      // Trending News
      setTrendingNews(news.slice(0, 5));

    } catch (error) {
      console.log(error);
    }

  };

  if (!featuredNews) {
    return (
      <section className="hero">
        <h2
          style={{
            textAlign: "center",
            padding: "80px"
          }}
        >
          No News Available
        </h2>
      </section>
    );
  }

  return (

    <section className="hero">

      <div className="hero-left">

        <img
          src={
            featuredNews.imageUrl
              ? `http://localhost:8080${featuredNews.imageUrl}`
              : "https://placehold.co/900x500?text=No+Image"
          }
          alt={featuredNews.title}
          onError={(e) => {
            e.target.src =
              "https://placehold.co/900x500?text=No+Image";
          }}
        />

        <div className="overlay">

          <span className="tag">
            {featuredNews.category?.name || "Top Story"}
          </span>

          <h1>
            {featuredNews.title}
          </h1>

          <p>
            {featuredNews.shortDescription}
          </p>

          <Link to={`/news/${featuredNews.id}`}>
            <button>
              Read Full Story
            </button>
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <h2>Trending</h2>

        {trendingNews.map((item) => (

          <Link
            key={item.id}
            to={`/news/${item.id}`}
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >

            <div className="trend-card">

              🔥 {item.title}

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

};

export default Hero;