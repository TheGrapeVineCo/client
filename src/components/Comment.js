import React from "react";

// Renders one comment from 'Comments' component
const Comment = ({ commentList }) => {
  return (
    <>
      <p>{commentList.text}</p>
      <p>{commentList.user}</p>
    </>
  );
};

export default Comment;
