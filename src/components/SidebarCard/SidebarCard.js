import "./SidebarCard.scss";
import { Link } from "react-router-dom";

const SidebarCard = ({ id, image, title, channel }) => {
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="sidebarcard-link"
      to={`/video/${id}`}
    >
      <li className="sidebarcard">
        <img className="sidebarcard__image" alt="video preview" src={image} />

        <div className="sidebarcard__box">
          <h3 className="sidebarcard__video-title">{title}</h3>
          <h4 className="sidebarcard__channel">{channel}</h4>
        </div>
      </li>
    </Link>
  );
};

export default SidebarCard;
