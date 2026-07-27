import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./ManageNews.css";

const BASE_URL = "http://localhost:8080";

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/news`);

      if (response.data.content) {
        setNews(response.data.content);
      } else {
        setNews(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNews = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${BASE_URL}/api/news/${id}`);

      alert("News deleted successfully.");

      loadNews();
    } catch (error) {
      console.error(error);
      alert("Unable to delete news.");
    }
  };

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.title?.toLowerCase().includes(keyword) ||
        item.author?.toLowerCase().includes(keyword) ||
        item.category?.name?.toLowerCase().includes(keyword)
      );
    });
  }, [news, search]);

  return (
    <div className="manage-news-container">

      <div className="manage-news-header">

        <div>
          <h2>Manage News</h2>
          <p>View, search and manage all published news.</p>
        </div>

        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-card">

        <table className="news-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Views</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredNews.length > 0 ? (

              filteredNews.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>

                    {item.imageUrl ? (
                      <img
                        className="manage-news-image"
                        src={`${BASE_URL}${item.imageUrl}`}
                        alt={item.title}
                      />
                    ) : (
                      <div className="image-placeholder">
                        No Image
                      </div>
                    )}

                  </td>

                  <td className="title-column">
                    {item.title}
                  </td>

                  <td>
                    <span className="category-badge">
                      {item.category?.name}
                    </span>
                  </td>

                  <td>{item.author}</td>

                  <td>{item.views}</td>

                  <td>

                    <div className="status-container">

                      {item.featured && (
                        <span className="featured-badge">
                          Featured
                        </span>
                      )}

                      {item.breakingNews && (
                        <span className="breaking-badge">
                          Breaking
                        </span>
                      )}

                      {!item.featured &&
                        !item.breakingNews && (
                          <span className="normal-badge">
                            Normal
                          </span>
                        )}

                    </div>

                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="delete-btn"
                        onClick={() => deleteNews(item.id)}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="no-data"
                >
                  No news found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageNews;