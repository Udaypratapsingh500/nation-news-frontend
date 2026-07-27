import { useEffect, useState } from "react";
import {
  getCategories,
  createNews,
  uploadImage,
} from "../service/newsService";
import "./CreateNews.css";

const CreateNews = () => {
  const [categories, setCategories] = useState([]);

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [news, setNews] = useState({
    title: "",
    shortDescription: "",
    content: "",
    author: "",
    category: "",
    videoUrl: "",
    featured: false,
    breakingNews: false,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getCategories();

      alert(JSON.stringify(data));

      setCategories(data);
    } catch (error) {
      alert("Category API Failed");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setNews({
      ...news,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = "";

      // Upload Image First
      if (image) {
        const uploadResponse = await uploadImage(image);
        imageUrl = uploadResponse.imageUrl;
      }

      // Create News
      await createNews({
        title: news.title,
        shortDescription: news.shortDescription,
        content: news.content,
        author: news.author,

        category: {
          id: Number(news.category),
        },

        imageUrl: imageUrl,
        videoUrl: news.videoUrl,

        featured: news.featured,
        breakingNews: news.breakingNews,
      });

      alert("News Published Successfully!");

      setNews({
        title: "",
        shortDescription: "",
        content: "",
        author: "",
        category: "",
        videoUrl: "",
        featured: false,
        breakingNews: false,
      });

      setImage(null);

      document.getElementById("imageInput").value = "";

    } catch (error) {
      console.error(error);
      alert("Failed to publish news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-news-page">

      <div className="create-news-card">

        <div className="page-header">
          <h1>Create News</h1>
          <p>Publish a new article to your Nation News Portal.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>News Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter News Title"
              value={news.title}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Short Description</label>

            <textarea
              name="shortDescription"
              rows="3"
              placeholder="Write Short Description..."
              value={news.shortDescription}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Content</label>

            <textarea
              name="content"
              rows="8"
              placeholder="Write Complete News..."
              value={news.content}
              onChange={handleChange}
              required
            />

          </div>

          <div className="row">

            <div className="form-group">

              <label>Author</label>

              <input
                type="text"
                name="author"
                placeholder="Author Name"
                value={news.author}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Category</label>

              <select
                name="category"
                value={news.category}
                onChange={handleChange}
                required
              >

                <option value="">Select Category</option>

                {categories.map((category) => (

                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>

                ))}

              </select>

            </div>

          </div>

          <div className="form-group">

            <label>YouTube Video URL (Optional)</label>

            <input
              type="url"
              name="videoUrl"
              placeholder="https://www.youtube.com/watch?v=..."
              value={news.videoUrl}
              onChange={handleChange}
            />

          </div>

          <div className="row">

            <div className="form-group">

              <label>News Image</label>

              <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />

              {image && (
                <small
                  style={{
                    marginTop: "8px",
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  Selected: {image.name}
                </small>
              )}

            </div>

          </div>

          <div
            className="row"
            style={{
              marginTop: "10px",
            }}
          >

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
              }}
            >
              <input
                type="checkbox"
                name="featured"
                checked={news.featured}
                onChange={handleChange}
              />

              Featured News
            </label>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
              }}
            >
              <input
                type="checkbox"
                name="breakingNews"
                checked={news.breakingNews}
                onChange={handleChange}
              />

              Breaking News
            </label>

          </div>

          <button
            type="submit"
            className="publish-btn"
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish News"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateNews;