/* setup but may be redundant - need to look into this further - setup also incomplete*/
// Essentially loads all the comments
// import Comment from "./Comment";

const Comments = ({ commentList }) => {
  return (
    <>
      <h1>User Comments</h1>
      {/* for each comment made, render the text and user made */}
      {commentList.map(
        (comment) => (
          <>
            <p>{comment.text}</p>
            <p>{comment.user}</p>
          </>
        )
        // <Comment key={comment.id} comment={comment} />
      )}
    </>
  );
};

export default Comments;
