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
    <div className="commentcard">
      <img className="comments__avatar" src={blankAvatar} alt="empty profile" />
      <div className="commentcard__right">
        <div className="commentcard__right-top">
          <h3 className="commentcard__name--bold">{name}</h3>
          <h4 className="commentcard__date--color">{finalDate}</h4>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
