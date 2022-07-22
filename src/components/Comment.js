/* setup but may be redundant - need to look into this further - setup also incomplete*/
// Renders one comment
const Comment = ({ comment }) => {
  return (
    <>
      <p>{comment.text}</p>
      <p>{comment.user}</p>
    </>
  );
};

export default Comment;
