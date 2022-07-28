import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";

const NewCommentModal = ({ show, handleClose, loggedInUser, listing }) => {
  const { dispatch } = useGlobalState();
  // sets initial FormData fields to empty for newCommentForm
  const initialFormData = {
    text: "",
    user: loggedInUser,
    wine_listing_id: listing.id,
  };
  // provides state to text field in newCommentForm
  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Need to review validation so it notifies user that empty string cannot be posted
    if (formData.text === "") {
    } else {
      setFormData({
        ...formData,
        // not meant to render in UI - for BE purposes
        id: "REPLACE THIS WITH ID FROM THE BE",
      });
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
    <Modal
      show={show}
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
            {/* <Form.Label>✍️</Form.Label> */}
            <Form.Control
              data-testid="comment-input"
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
  );
};

export default NewCommentModal;
