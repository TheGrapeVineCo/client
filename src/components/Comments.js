/* setup but may be redundant - need to look into this further - setup also incomplete*/
import Comment from "./Comment";

const Comments = ({ commentList }) => {
  return (
    <>
      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
