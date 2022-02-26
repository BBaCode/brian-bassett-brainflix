import "./SidebarCard.scss";

const SidebarCard = (props) => {
  return (
    <li className="sidebar-card">
      <a
        className="sidebar-card-link"
        onClick={() => {
          props.handleVideoChange(props.id);
        }}
        href="#root"
      >
        <img
          className="sidebar-card-image"
          alt="video preview"
          src={props.image}
        />
      </a>
      {/* make this a li item and the sidebar an unordered list 
      use an anchor tag with the photo within it/maybe the whole Li
      inside of the anchor tag, pass props.handlevideochange and we want to pass an ID*/}
      <div className="sidebar-card-box">
        <h3 className="sidebar-card-video-title">{props.title}</h3>
        <h4 className="sidebar-card-channel">{props.channel}</h4>
      </div>
    </li>
  );
};

export default SidebarCard;
