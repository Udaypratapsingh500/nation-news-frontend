import { Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Category from "./pages/Category/Category";
import LiveTV from "./pages/LiveTV";
import Contact from "./pages/Contact/Contact";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import Login from "./admin/Login";
import CreateNews from "./admin/CreateNews";
import ManageNews from "./admin/ManageNews";

function App() {
  return (
    <Routes>

      {/* ================= USER WEBSITE ================= */}

      <Route path="/" element={<Home />} />

      <Route
        path="/news/:id"
        element={<NewsDetails />}
      />

      <Route
        path="/search"
        element={<Search />}
      />

      <Route
        path="/category/:category"
        element={<Category />}
      />

      <Route
        path="/live"
        element={<LiveTV />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ================= ADMIN PANEL ================= */}

      <Route
        path="/admin"
        element={<Dashboard />}
      />

      <Route
        path="/admin/login"
        element={<Login />}
      />

      <Route
        path="/admin/create-news"
        element={<CreateNews />}
      />

      <Route
        path="/admin/manage-news"
        element={<ManageNews />}
      />

    </Routes>
  );
}

export default App;