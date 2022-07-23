/* setup but may be redundant - need to look into this further - setup also incomplete*/
// Renders one comment
const Comment = ({ commentList }) => {
  return (
    <>
      <p>{commentList.text}</p>
      <p>{commentList.user}</p>
    </>
  );
};

export default Comment;
