import React from "react";
import { useGlobalState, useParams } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import Comment from "./Comment";

// Iterates through all comments, taking data as required
const Comments = ({ commentList }) => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  // const params = useParams();

  // const editComment = (e) => {
  //   e.preventDefault();
  //   removeComment(params.messageId).then((data) => {
  //     console.log(data);
  //     dispatch({
  //       type: "deleteMessage",
  //       data: params.messageId,
  //     });
  //     navigate("/messages");
  //   });
  // };

  return (
    <>
      <h4>User Comments</h4>
      {/* for each comment made, render the text and user name */}
      {commentList.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
          {loggedInUser === comment.user_id && (
            // <Button onClick={""}>Edit Message</Button>
            <Button variant="link" className="custom-btn">
              Edit Message
            </Button>
          )}
          {loggedInUser === comment.user_id && (
            // <Button onClick={""}>Delete Message</Button>
            <Button variant="link" className="custom-btn-delete">
              Delete Message
            </Button>
          )}
        </div>
      ))}
    </>
  );
};

export default Comments;
