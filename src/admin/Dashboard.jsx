import "./Dashboard.css";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <h1>Admin Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>Total News</h2>
            <p>0</p>
          </div>

          <div className="card">
            <h2>Categories</h2>
            <p>0</p>
          </div>

          <div className="card">
            <h2>Featured</h2>
            <p>0</p>
          </div>

          <div className="card">
            <h2>Breaking</h2>
            <p>0</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;