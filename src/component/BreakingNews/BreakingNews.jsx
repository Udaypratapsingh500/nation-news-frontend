import "./BreakingNews.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BreakingNews = () => {

  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    loadBreakingNews();
  }, []);

  const loadBreakingNews = async () => {
    try {

      const response = await axios.get(
        "http://localhost:8080/api/news/breaking"
      );

      setBreakingNews(response.data.content);

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="breaking-container">

      <div className="breaking-label">
        BREAKING
      </div>

      <div className="breaking-news">

        <div className="ticker">

          {breakingNews.length > 0
            ? breakingNews.map((news) => (
                `🚨 ${news.title} • `
              ))
            : "No Breaking News"}

        </div>

      </div>

    </div>

  );

};

export default BreakingNews;