import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";

// Renders one comment from 'Comments' component
const Comment = ({ comment }) => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  const deleteComment = (e) => {
    e.preventDefault();
    // TODO: implement delete comment
  };

  const { username, updated, comment: text, user_id } = comment;

  return (
    <>
      <p className="text-detail">{username}</p>
      <p className="text-detail">{updated}</p>
      <p>{text}</p>
      {loggedInUser === user_id && (
        <Button variant="link" className="custom-btn" comment={comment}>
          Edit Message
        </Button>
      )}
      {loggedInUser === user_id && (
        <Button
          variant="link"
          className="custom-btn-delete"
          comment={comment}
          onClick={deleteComment}
        >
          Delete Message
        </Button>
      )}
    </>
  );
};

export default Comment;
