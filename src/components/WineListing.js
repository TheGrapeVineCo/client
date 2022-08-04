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
    <Card data-testid="wineListing-element" className="wl-container">
      <Card.Body className="wl-body">
        <Card.Title className="fw-bold wl-text">{listing.brand}</Card.Title>
        <Card.Text className="wl-text">{listing.grape_variety}</Card.Text>
        <Card.Text className="wl-text">{listing.year}</Card.Text>
        <Card.Text className="wl-text">{listing.category}</Card.Text>
        <Card.Text className="wl-text">{listing.country}</Card.Text>
        <Card.Text className="wl-text">{listing.region}</Card.Text>
        <Card.Text className="desc wl-text">{listing.description}</Card.Text>

        {/* Coerce commentList length to boolean value to render button */}
        {!!commentList.length && (
          <>
            <Button
              variant="link"
              onClick={handleComments}
              className="custom-btn"
            >
              {showComments ? `Hide` : `View`} Comments...
            </Button>
            {/* Only render comments link if user logged in */}
            {loggedInUser && (
              <Button
                variant="link"
                onClick={handleShow}
                className="custom-btn"
              >
                Add Comment
              </Button>
            )}
            {showComments && <Comments commentList={commentList} />}
          </>
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
