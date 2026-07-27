import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

    <div className="sidebar">

      <h2>Nation News</h2>

      <Link to="/admin">
        Dashboard
      </Link>

      <Link to="/admin/create-news">
        Create News
      </Link>

      <Link to="/admin/manage-news">
              Manage News
      </Link>

      <Link to="/">
              Back Website
      </Link>


    </div>

  );
};

export default Sidebar;