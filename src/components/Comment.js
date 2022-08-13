import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import { removeComment } from "../services/commentServices";

// Renders one comment from 'Comments' component
const Comment = ({ comment }) => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  const deleteComment = (e) => {
    e.preventDefault();

    removeComment(comment.id).then((data) => {
      dispatch({
        type: "deleteComment",
        data: comment.id,
      });
    });
  };

  const { username, updated, comment: text, user_id } = comment;

  return (
    <>
      <p className="text-detail">{username}</p>
      <p className="text-detail">{updated}</p>
      <p>{text}</p>
      {loggedInUser.id === user_id && (
        <Button variant="link" className="custom-btn" comment={comment}>
          Edit Message
        </Button>
      )}
      {loggedInUser.id === user_id && (
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
