// Iterates through all comments, taking data as required
const Comments = ({ commentList }) => {
  return (
    <>
      <h1>User Comments</h1>
      {/* for each comment made, render the text and user name */}
      {commentList.map((comment) => (
        <>
          <p>{comment.user_comment}</p>
          <p>{comment.user_id}</p>
        </>
      ))}
    </>
  );
};

export default Comments;
