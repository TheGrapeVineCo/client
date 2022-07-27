import { useGlobalState } from "../utils/stateContext";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

// Renders individual wine listing
const WineListing = ({ loggedInUser, listing, commentList, addComment }) => {
  const { dispatch } = useGlobalState();
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

  // sets initial FormData fields to empty for newCommentForm
  const initialFormData = {
    text: "",
    user: loggedInUser,
    wine_listing_id: listing.id,
  };
  // provides state to text field in newCommentForm
  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Need to review validation so it notifies user that empty string cannot be posted
    if (formData.text === "") {
      console.log("Empty message");
    } else {
      setFormData({
        ...formData,
        // not meant to render in UI - for BE purposes
        id: "REPLACE THIS WITH ID FROM THE BE",
      });
      console.log(formData);
      clearFormData();
      dispatch({
        type: "addComment",
        data: formData,
      });
    }
  };
  //   clears the form data for next entry
  const clearFormData = () => {
    setFormData(initialFormData);
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
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group>
                <Form.Label>✍️</Form.Label>
                <Form.Control
                  type="text"
                  id="text"
                  name="text"
                  as="textarea"
                  rows={2}
                  placeholder="What are your thoughts on this wine..."
                  value={formData.text}
                  onChange={handleFormData}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                type="submit"
                value="post"
                onClick={handleClose}
              >
                Post
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default WineListing;
