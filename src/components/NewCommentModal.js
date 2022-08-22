import React, { useState } from "react";
import { useGlobalState } from "../utils/stateContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createComment, editComment } from "../services/commentServices";

// destructures react-bootstrap component to make code DRY
const { Header, Title, Body, Footer } = Modal;
const { Group, Control } = Form;

const NewCommentModal = ({ show, handleClose, listing, comment }) => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  // sets initial FormData fields to empty for newCommentForm
  const initialFormData = {
    comment: "",
    user_id: loggedInUser.id,
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
    if (formData.comment === "") {
      //   // TODO: Review validation so it notifies user that empty string cannot be posted
      return;
    }
    if (comment && comment.id) {
      const updateComment = { ...formData, id: comment.id };
      editComment(updateComment)
        .then(() => {
          dispatch({
            type: "updateComment",
            data: {
              comment: { comment: formData.comment, commentID: comment.id },
            },
          });
        })
        .catch((error) => console.log(error));
    } else {
      createComment(formData)
        .then((comment) => {
          dispatch({ type: "addComment", data: comment });
        })
        .catch((error) => console.log(error));
    }
    clearFormData();
  };

  // clears the form data for next entry
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
      <Header closeButton className="modal-container-top">
        <Title className="modal-title" id="contained-modal-title-vcenter">
          Share your thoughts on the 🍷
        </Title>
      </Header>
      <Form onSubmit={handleSubmit} className="modal-container-body">
        <Body>
          <Group>
            <Control
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
          </Group>
        </Body>
        <Footer className="border-0">
          <Button
            variant="secondary"
            type="submit"
            value={comment ? "Update" : "Post"}
            // value="Post"
            onClick={handleClose}
            className="btn-default"
          >
            {comment ? "Update" : "Post"}
          </Button>
        </Footer>
      </Form>
    </Modal>
  );
};

export default NewCommentModal;
