import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

// Renders individual wine listing
const WineListing = ({ loggedInUser, listing, commentList }) => {
  const [showComments, setShowComments] = useState(false);
  const handleComments = () => {
    setShowComments(!showComments);
  };

  // -----> All code below is for newCommentForm <-----

  // provides state to render newCommentForm as modal
  const [newComment, setNewComment] = useState(false);
  // Opens modal for user to make new comment
  const handleShow = () => setNewComment(true);
  // Closes modal
  const handleClose = () => setNewComment(false);

  // sets initial FormData fields to empty
  const initialFormData = {
    text: "",
  };
  // provides state to text field in newCommentForm
  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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

        <Modal
          show={newComment}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Share your thoughts on the 🍷
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>✍️</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={2}
                placeholder="What are your thoughts on this wine..."
                onChange={handleFormData}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default WineListing;
