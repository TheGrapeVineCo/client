import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
// import { removeComment } from "../services/commentServices";

// Renders one comment from 'Comments' component
const Comment = ({ comment }) => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  // date format not correct - may update to include
  // const timePassed = new Date() - new Date(comment.updated);
  // const currentUsername = "test";

  const deleteComment = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <>
      <p className="text-detail">{comment.username}</p>
      {/* <p className="text-detail">{currentUsername}</p> */}
      <p className="text-detail">{comment.updated}</p>
      <p>{comment.comment}</p>
      {loggedInUser === comment.user_id && (
        // <Button onClick={""}>Edit Message</Button>
        <Button variant="link" className="custom-btn" comment={comment} id={55}>
          Edit Message
        </Button>
      )}
      {loggedInUser === comment.user_id && (
        // <Button onClick={""}>Delete Message</Button>
        <Button
          variant="link"
          className="custom-btn-delete"
          comment={comment}
          id={55}
          onClick={deleteComment}
        >
          Delete Message
        </Button>
      )}
    </>
  );
};

export default Comment;
