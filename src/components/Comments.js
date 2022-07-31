import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import Comment from "./Comment";

// Iterates through all comments, taking data as required
const Comments = ({ commentList }) => {
  const { store } = useGlobalState();

  const { loggedInUser } = store;

  return (
    <>
      <h4>User Comments</h4>
      {/* for each comment made, render the text and user name */}
      {commentList.map((comment) => (
        <>
          <Comment key={comment.id} comment={comment} />
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
