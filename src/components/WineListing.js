import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";
import NewCommentModal from "./NewCommentModal";
import { useGlobalState } from "../utils/stateContext";

// Renders individual wine listing
const WineListing = ({ listing, commentList }) => {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
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
    <Card data-testid="wineListing-element" className="card-body">
      <Card.Body>
        <Card.Title className="fw-bold">{listing.brand}</Card.Title>
        <Card.Text>{listing.grape_variety}</Card.Text>
        <Card.Text>{listing.year}</Card.Text>
        <Card.Text>{listing.category}</Card.Text>
        <Card.Text>{listing.country}</Card.Text>
        <Card.Text>{listing.region}</Card.Text>
        <Card.Text>{listing.description}</Card.Text>

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
        {loggedInUser && (
          <Button variant="primary" onClick={handleShow}>
            Add Comment
          </Button>
        )}

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
