import React from "react";

// Renders one comment from 'Comments' component
const Comment = ({ comment }) => {
  return (
    <>
      <p>{comment.comment}</p>
      <p>{comment.updated}</p>
      <p>{comment.username}</p>
    </>
  );
};

export default Comment;
