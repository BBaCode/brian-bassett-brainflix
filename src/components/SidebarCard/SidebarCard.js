import "./SidebarCard.scss";
import { Link } from "react-router-dom";

const SidebarCard = ({ id, image, title, channel }) => {
  return (
    <Link className="sidebar__card-link" to={`/video/${id}`}>
      <li className="sidebar__card">
        <img className="sidebar__card-image" alt="video preview" src={image} />

        <div className="sidebar__card-box">
          <h3 className="sidebar__card-video-title">{title}</h3>
          <h4 className="sidebar__card-channel">{channel}</h4>
        </div>
      </li>
    </Link>
  );
};

export default SidebarCard;
