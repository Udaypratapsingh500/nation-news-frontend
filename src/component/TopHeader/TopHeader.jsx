import "./TopHeader.css";

const TopHeader = () => {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="top-header">

      <div className="left">
        📅 {today}
      </div>

      <div className="right">
        <span>🌤️ 27°C</span>
        <span>📧 contact@nationnews.com</span>
        <span className="live-tv">🔴 LIVE TV</span>
      </div>

    </div>
  );
};

export default TopHeader;