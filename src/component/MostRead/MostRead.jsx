import "./MostRead.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHomeData } from "../../service/newsService";

const MostRead = () => {

  const [mostRead, setMostRead] = useState([]);

  useEffect(() => {
    loadMostRead();
  }, []);

  const loadMostRead = async () => {
    try {
      const data = await getHomeData();
      setMostRead(data.mostRead);
    } catch (error) {
      console.log("Most Read Error:", error);
    }
  };

  return (
    <section className="most-read">

      <div className="section-title">
        <h2>Most Read</h2>
      </div>

      {mostRead.length > 0 ? (
        mostRead.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="most-card"
            style={{
              textDecoration: "none",
              color: "inherit",
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

            <div>
              <h4>{item.title}</h4>

              <span>{item.views} Views</span>
            </div>
          </Link>
        ))
      ) : (
        <p>No Most Read News</p>
      )}

    </section>
  );
};

export default MostRead;