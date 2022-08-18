import React from "react";
import { useState } from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import { removeComment } from "../services/commentServices";
// import { useHistory } from "react-router-dom";
import NewCommentModal from "./NewCommentModal";

// Renders one comment from 'Comments' component
const Comment = ({ comment, listing }) => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  // const history = useHistory();

  // provides state to render newCommentForm as modal
  const [showCommentModal, setShowCommentModal] = useState(false);

  // Closes modal
  const handleClose = () => setShowCommentModal(false);

  const deleteComment = (e) => {
    e.preventDefault();

    removeComment(comment.id)
      .then(() => {
        dispatch({
          type: "deleteComment",
          data: comment.id,
        });
      })
      .catch((error) => console.log(error));
  };

  const updateComment = (e) => {
    e.preventDefault();

    // console.log("first step achieved");
    // console.log(comment);
    // console.log(listing);
    // Opens modal for user to make new comment
    setShowCommentModal(true);
    // console.log(comment.id);
    // setShowCommentModal(false);

    // editComment({ id: comment.id, ...comment }).then(() => {
    //   console.log(comment.id, comment);
    //   dispatch({
    //     type: "updateComment",
    //     data: { id: comment.id, ...comment },
    //   });
    //   // history.push(`/comments/${comment.id}`);
    // });
  };

  const { username, updated, comment: text, user_id } = comment;

  return (
    <>
      <p className="text-detail">{username}</p>
      <p className="text-detail">{updated}</p>
      <p>{text}</p>
      {loggedInUser.id === user_id && (
        <Button
          variant="link"
          className="custom-btn"
          comment={comment}
          onClick={updateComment}
        >
          Edit Message
        </Button>
      )}

      <NewCommentModal
        show={showCommentModal}
        handleClose={handleClose}
        loggedInUser={loggedInUser}
        listing={listing}
        comment={comment}
      />

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
