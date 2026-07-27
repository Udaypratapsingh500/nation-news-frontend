import axios from "axios";

const API = axios.create({
  baseURL: "https://nation-news-backend.onrender.com/api",
});

// =======================
// Home Page
// =======================
export const getHomeData = async () => {
  const response = await API.get("/home");
  return response.data;
};

// =======================
// Dashboard
// =======================
export const getDashboardStats = async () => {
  const response = await API.get("/dashboard/stats");
  return response.data;
};

// =======================
// Categories
// =======================
export const getCategories = async () => {
  const response = await API.get("/categories");
  return response.data;
};

// =======================
// Upload Image
// =======================
export const uploadImage = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  const response = await API.post(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// =======================
// News APIs
// =======================

// Create News
export const createNews = async (news) => {
  const response = await API.post("/news", news);
  return response.data;
};

// Get All News
export const getAllNews = async () => {
  const response = await API.get("/news");
  return response.data;
};

// Get News By ID
export const getNewsById = async (id) => {
  const response = await API.get(`/news/${id}`);
  return response.data;
};

// Update News
export const updateNews = async (id, news) => {
  const response = await API.put(`/news/${id}`, news);
  return response.data;
};

// Delete News
export const deleteNews = async (id) => {
  const response = await API.delete(`/news/${id}`);
  return response.data;
};

// Breaking News
export const getBreakingNews = async () => {
  const response = await API.get("/news/breaking");
  return response.data;
};

// Featured News
export const getFeaturedNews = async () => {
  const response = await API.get("/news/featured");
  return response.data;
};

// News By Category
export const getNewsByCategory = async (category) => {
  const response = await API.get(`/news/category/${category}`);
  return response.data;
};

// Search News
export const searchNews = async (keyword) => {
  const response = await API.get(
    `/news/search?keyword=${keyword}`
  );
  return response.data;
};