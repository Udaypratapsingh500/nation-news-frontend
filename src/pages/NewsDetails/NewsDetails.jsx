import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import "./NewsDetails.css";

const NewsDetails = () => {

  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    loadNews();
  }, [id]);

  const loadNews = async () => {

    try {

      const response = await axios.get(
        `https://nation-news-backend.onrender.com/api/news/${id}`
      );

      setNews(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  if (!news) {

    return (
      <>
        <Navbar />

        <h2
          style={{
            textAlign: "center",
            marginTop: "100px"
          }}
        >
          Loading...
        </h2>

        <Footer />
      </>
    );

  }

  return (

    <>

      <Navbar />

      <div className="news-details">

        <span className="news-category">
          {news.category?.name || "General"}
        </span>

        <h1>{news.title}</h1>

        <p className="meta">

          <strong>{news.author}</strong>

          {news.publishedAt && (
            <>
              {" • "}
              {new Date(news.publishedAt).toLocaleDateString()}
            </>
          )}

        </p>


        <img
          className="news-image"
          src={
            news.imageUrl
              ? `https://nation-news-backend.onrender.com${news.imageUrl}`
              : "https://placehold.co/1200x600?text=No+Image"
          }
          alt={news.title}
          onError={(e) => {
            e.target.src =
              "https://placehold.co/1200x600?text=No+Image";
          }}
        />

        <p className="description">
          {news.shortDescription}
        </p>

        <div className="content">
          {news.content}
        </div>

      </div>

      <Footer />

    </>

  );

};

export default NewsDetails;