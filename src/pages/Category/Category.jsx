import "./Category.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import TopHeader from "../../component/TopHeader/TopHeader";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import { getNewsByCategory } from "../../service/newsService";

const Category = () => {
  const { category } = useParams();

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  const [allNews, setAllNews] = useState([]);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    loadCategoryNews();
  }, [category]);

  const loadCategoryNews = async () => {
    try {
      const response = await getNewsByCategory(categoryName);

      if (response.content) {
        setAllNews(response.content);
      } else {
        setAllNews(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredNews = allNews.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <TopHeader />
      <Navbar />

      <section className="category-banner">
        <div className="banner-content">
          <p className="breadcrumb">
            Home <span>/</span> {categoryName}
          </p>

          <h1>{categoryName}</h1>

          <p className="banner-desc">
            Stay updated with the latest {categoryName.toLowerCase()} news,
            breaking stories, expert analysis, and important developments from
            around the world.
          </p>
        </div>
      </section>

      <section className="category-container">

        <div className="category-left">

          <input
            className="category-search"
            type="text"
            placeholder={`Search ${categoryName} news...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category-grid">

            {filteredNews.length > 0 ? (

              filteredNews
                .slice(0, visible)
                .map((news) => (

          <Link
            key={news.id}
            to={`/news/${news.id}`}
            className="category-card"
          >

            <div className="card-image">

              <img
                src={`https://nation-news-backend.onrender.com${news.imageUrl}`}
                alt={news.title}
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x400?text=No+Image";
                }}
              />

            </div>

            <div className="category-content">

              <span className="category-badge">
                {news.category?.name}
              </span>

              <h2>{news.title}</h2>

              <p>
                {news.shortDescription}
              </p>

              <div className="card-footer">

                <span className="news-date">

                  📅{" "}
                  {news.publishedAt
                    ? new Date(
                        news.publishedAt
                      ).toLocaleDateString()
                    : "Today"}

                </span>

                <span className="read-more">
                  Read More →
                </span>

              </div>

            </div>

          </Link>

          ))
          ) : (

          <div className="no-news">

            No {categoryName} news found.

          </div>

          )}

          </div>

          {visible < filteredNews.length && (

          <button
            className="load-more"
            onClick={() => setVisible(visible + 3)}
          >
            Load More
          </button>

          )}

          </div>

          {/* SIDEBAR */}

                  {/* SIDEBAR */}

                  <aside className="category-sidebar">

                    <div className="sidebar-box">

                      <h3>🔥 Trending News</h3>

                      <ul>

                        {allNews.slice(0, 5).map((item) => (

                          <li key={item.id}>

                            <Link
                              to={`/news/${item.id}`}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              {item.title}
                            </Link>

                          </li>

                        ))}

                      </ul>

                    </div>

                    <div className="sidebar-box">

                      <h3>⭐ Editor's Picks</h3>

                      <ul>

                        {allNews
                          .filter((item) => item.featured)
                          .slice(0, 3)
                          .map((item) => (

                            <li key={item.id}>

                              <Link
                                to={`/news/${item.id}`}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                {item.title}
                              </Link>

                            </li>

                          ))}

                      </ul>

                    </div>

                    <div className="sidebar-box">

                      <h3>Advertisement</h3>

                      <div className="ad-box">
                        300 × 250
                      </div>

                    </div>

                  </aside>

                </section>

                <Footer />

              </>
            );
          };

          export default Category;