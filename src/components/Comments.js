import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";

// Iterates through all comments, taking data as required
const Comments = ({ commentList }) => {
  const { store } = useGlobalState();

  const { loggedInUser } = store;

  return (
    <>
      <h1>User Comments</h1>
      {/* for each comment made, render the text and user name */}
      {commentList.map((comment) => (
        <>
          <p>{comment.user_comment}</p>
          <p>{comment.user_id}</p>

          {loggedInUser === comment.user_id && (
            // <Button onClick={""}>Delete Message</Button>
            <Button>Delete Message</Button>
          )}
          {loggedInUser === comment.user_id && (
            // <Button onClick={""}>Edit Message</Button>
            <Button>Edit Message</Button>
          )}
        </>
      ))}
    </>
  );
};

export default Comments;
