import "./SidebarCard.scss";
import videoDetails from "../../data/video-details.json";

const video1 = videoDetails[1];

const SidebarCard = () => {
  return (
    <section className="sidebar-card">
      <img
        className="sidebar-card-image"
        alt="video preview"
        src={video1.image}
      />
      <div className="sidebar-card-box">
        <h3 className="sidebar-card-video-title">{video1.title}</h3>
        <h4 className="sidebar-card-channel">{video1.channel}</h4>
      </div>
    </section>
  );
};

export default SidebarCard;
