// Renders one comment from 'Comments' component
const Comment = ({ commentList }) => {
  return (
    <>
      <p>{commentList.user_comment}</p>
      {/* <p>{commentList.user_id}</p> */}
    </>
  );
};

export default Comment;
