import React from "react";
import Comment from "./Comment";

// Iterates through all comments, taking data as required
const Comments = ({ commentList }) => {
  return (
    <>
      <h5 className="comments-title">What are your thoughts 🍷</h5>
      {/* for each comment made, render the text and user name */}
      {commentList.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </>
  );
};

export default Comments;
