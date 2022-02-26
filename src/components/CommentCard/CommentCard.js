import "./CommentCard.scss";
import blankAvatar from "../../assets/images/mercury.png";

const CommentCard = ({ timestamp, name, comment }) => {
  const commentItem = timestamp;
  const commentDate = new Date(commentItem);

  let dd = String(commentDate.getDate()).padStart(2, "0");
  let mm = String(commentDate.getMonth() + 1).padStart(2, "0");
  let yyyy = commentDate.getFullYear();
  let finalDate = mm + "/" + dd + "/" + yyyy;

  return (
    <div className="comments-list">
      <img className="comments-avatar" src={blankAvatar} alt="empty profile" />
      <div className="comments-list-right">
        <div className="comments-list-right-top">
          <h3 className="comments-list-name--bold">{name}</h3>
          <h4 className="comments-list-date--color">{finalDate}</h4>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
