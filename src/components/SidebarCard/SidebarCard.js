import "./SidebarCard.scss";

const SidebarCard = ({ handleVideoChange, id, image, title, channel }) => {
  return (
    <li className="sidebar__card">
      <a
        className="sidebar__card-link"
        onClick={() => {
          handleVideoChange(id);
        }}
        href="#root"
      >
        <img className="sidebar__card-image" alt="video preview" src={image} />
      </a>
      <div className="sidebar__card-box">
        <h3 className="sidebar__card-video-title">{title}</h3>
        <h4 className="sidebar__card-channel">{channel}</h4>
      </div>
    </li>
  );
};

export default SidebarCard;
