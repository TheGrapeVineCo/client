import React, { useState } from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createComment } from "../services/commentServices";

const NewCommentModal = ({ show, handleClose, listing }) => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  // sets initial FormData fields to empty for newCommentForm
  const initialFormData = {
    comment: "",
    user_id: loggedInUser,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Need to review validation so it notifies user that empty string cannot be posted
    if (formData.comment === "") {
    } else {
      // data not rendering due to line belows api call failing
      const response = await createComment(formData);
      console.log(response);
      // need to get comment id from API response and pass on to dispatch
      // may need to update data after this line to ensure the data matches up. Line 35 might not be required after the API call works
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
      <Modal.Header closeButton className="modal-container-top">
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          Share your thoughts on the 🍷
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} className="modal-container-body">
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              id="comment"
              name="comment"
              as="textarea"
              rows={2}
              placeholder="What are your thoughts on this wine..."
              value={formData.comment}
              onChange={handleFormData}
              className="border-0"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            variant="secondary"
            type="submit"
            value="post"
            onClick={handleClose}
            className="btn-default"
          >
            Post
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewCommentModal;
