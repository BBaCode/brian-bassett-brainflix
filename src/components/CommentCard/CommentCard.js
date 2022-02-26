import "./CommentCard.scss";
import commentDetails from "../../data/video-details.json";
import blankAvatar from "../../assets/images/mercury.png";

const CommentCard = (props) => {
  const commentItem = props.timestamp;

  const commentDate = new Date(commentItem);
  const finalDate =
    commentDate.getMonth() +
    1 +
    "/" +
    commentDate.getDate() +
    "/" +
    commentDate.getFullYear();
  return (
    <div className="comments-list">
      <img className="comments-avatar" src={blankAvatar} alt="empty profile" />
      <div className="comments-list-right">
        <div className="comments-list-right-top">
          <h3 className="comments-list-name--bold">{props.name}</h3>
          <h4 className="comments-list-date--color">{finalDate}</h4>
        </div>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
