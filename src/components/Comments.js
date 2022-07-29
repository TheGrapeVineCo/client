import React from "react";
import Button from "react-bootstrap/Button";
import { useGlobalState } from "../utils/stateContext";
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
          <p>{comment.text}</p>
          <p>{comment.user}</p>

          {loggedInUser === comment.user && (
            <Button onClick={""}>Delete Message</Button>
          )}
          {loggedInUser === comment.user && (
            <Button onClick={""}>Edit Message</Button>
          )}
        </>
      ))}
    </>
  );
};

export default Comments;
