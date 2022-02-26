import "./SidebarCard.scss";

const SidebarCard = ({ handleVideoChange, id, image, title, channel }) => {
  return (
    <li className="sidebar-card">
      <a
        className="sidebar-card-link"
        onClick={() => {
          handleVideoChange(id);
        }}
        href="#root"
      >
        <img className="sidebar-card-image" alt="video preview" src={image} />
      </a>
      <div className="sidebar-card-box">
        <h3 className="sidebar-card-video-title">{title}</h3>
        <h4 className="sidebar-card-channel">{channel}</h4>
      </div>
    </li>
  );
};

export default SidebarCard;
