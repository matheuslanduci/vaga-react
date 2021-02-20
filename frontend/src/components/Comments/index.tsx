import "./styles.css";

type TComment = {
  name: string;
  photo: string;
  rating: number;
  comment: string;
};

type Props = {
  comment: TComment;
};

export default function Comment({ comment }: Props) {
  return (
    <div className="product-comment">
      <div className="product-comment-data">
        <img
          src={comment.photo}
          alt={comment.name}
          className="product-comment-photo"
        />
        <span className="product-comment-name">{comment.name}</span>
      </div>
      <p className="product-comment-text">{comment.comment}</p>
      <span className="product-comment-rating">
        Avaliação: {comment.rating}/5
      </span>
    </div>
  );
}
