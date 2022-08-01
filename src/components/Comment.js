import React from "react";

// Renders one comment from 'Comments' component
const Comment = ({ comment }) => {
  // const createdAt = new Date(comment.updated);
  // const createdDate = createdAt.toLocaleDateString("en-AU");
  console.log(comment);
  return (
    <>
      <p className="comm-text">{comment.comment}</p>
      <p className="comm-detail">{comment.username}</p>
      <p className="comm-detail">{comment.updated}</p>
    </>
  );
};

export default Comment;
