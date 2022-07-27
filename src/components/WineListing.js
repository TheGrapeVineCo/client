import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";
import NewCommentModal from "./NewCommentModal";

// Renders individual wine listing
const WineListing = ({ loggedInUser, listing, commentList, addComment }) => {
  const [showComments, setShowComments] = useState(false);
  const handleComments = () => {
    setShowComments(!showComments);
  };

  // provides state to render newCommentForm as modal
  const [showCommentModal, setShowCommentModal] = useState(false);
  // Opens modal for user to make new comment
  const handleShow = () => setShowCommentModal(true);
  // Closes modal
  const handleClose = () => setShowCommentModal(false);

  return (
    <Card data-testid="wineListing-element">
      <Card.Body>
        <p>{listing.brand}</p>
        <p>{listing.grape_variety}</p>
        <p>{listing.year}</p>
        <p>{listing.category}</p>
        <p>{listing.country}</p>
        <p>{listing.region}</p>
        <p>{listing.description}</p>

        {/* Coerce commentList length to boolean value to render button */}
        {!!commentList.length && (
          <>
            <Button variant="link" onClick={handleComments}>
              {showComments ? `Hide` : `View`} Comments...
            </Button>
            {showComments && <Comments commentList={commentList} />}
          </>
        )}

        {/* Only render comments link if user logged in */}
        {/* {loggedInUser && <Card.Link href="/">Add Comment</Card.Link>} */}
        <Button variant="primary" onClick={handleShow}>
          Add Comment
        </Button>

        <NewCommentModal
          show={showCommentModal}
          handleClose={handleClose}
          loggedInUser={loggedInUser}
          listing={listing}
        />
      </Card.Body>
    </Card>
  );
};

export default WineListing;
