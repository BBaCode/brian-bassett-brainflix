import "./CommentCard.scss";
import commentDetails from "../../data/video-details.json";
import blankAvatar from "../../assets/images/mercury.png";

const commentItem = commentDetails[0].comments[0];
console.log(commentItem);

const commentDate = new Date(commentItem.timestamp);
const finalDate =
  commentDate.getMonth() +
  1 +
  "/" +
  commentDate.getDate() +
  "/" +
  commentDate.getFullYear();

const CommentCard = () => {
  return (
    <div className="comments-list">
      <img className="comments-avatar" src={blankAvatar} alt="empty profile" />
      <div className="comments-list-right">
        <div className="comments-list-right-top">
          <h3 className="comments-list-name--bold">{commentItem.name}</h3>
          <h4 className="comments-list-date--color">{finalDate}</h4>
        </div>
        <p>{commentItem.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
