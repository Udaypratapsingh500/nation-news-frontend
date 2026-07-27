import { useEffect, useState } from "react";
import { getHomeData } from "../../service/newsService";
import "./VideoSection.css";

const VideoSection = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {

      const data = await getHomeData();

      // latestNews array lo
      const latestNews = data.latestNews || [];

      // Sirf wahi news jinke paas videoUrl ho
      const videoNews = latestNews.filter(
        (item) => item.videoUrl && item.videoUrl.trim() !== ""
      );

      setVideos(videoNews);

    } catch (error) {
      console.error(error);
    }
  };

  // YouTube Thumbnail
  const getThumbnail = (url) => {

    try {

      const videoId = new URL(url).searchParams.get("v");

      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }

    } catch (e) {
      console.log(e);
    }

    return "https://placehold.co/640x360?text=Video";

  };

  return (
    <section className="video-section">

      <div className="section-header">
        <h2>🎥 Video News</h2>
      </div>

      <div className="video-grid">

        {videos.map((video) => (

          <div
            className="video-card"
            key={video.id}
            onClick={() =>
              window.open(video.videoUrl, "_blank")
            }
          >

            <div className="video-image">

              <img
                src={getThumbnail(video.videoUrl)}
                alt={video.title}
              />

              <div className="play-btn">
                ▶
              </div>

            </div>

            <div className="video-content">

              <h3>{video.title}</h3>

              <p>
                {video.author}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default VideoSection;