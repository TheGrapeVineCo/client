import React from "react";

// Renders one comment from 'Comments' component
const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.user_comment}</p>
      <p>{comment.user_id}</p>
    </div>
  );
};

export default Comment;
