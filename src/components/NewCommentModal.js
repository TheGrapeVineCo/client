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
      // TODO: Review validation so it notifies user that empty string cannot be posted
      return;
    }
    console.log(comment);
    console.log(formData);
    if (comment.id) {
      editComment(formData).then(() => {
        dispatch({
          type: "updateComment",
          data: {
            comment: { comment: formData.comment, commentID: comment.id },
          },
        });
      });
    }
    // TODO: Use data from response to render new comment
    // console.log(formData);
    // const response = await createComment(formData);
    // createComment(formData).then((comment) => {
    // console logging the new comment - saving to DB
    // console.log(comment);
    // dispatch({
    //   type: "addComment",
    //   data: comment,
    // }).catch((error) => console.log(error));
    // });

    // console.log(response);
    // need to get comment id from API response and pass on to dispatch
    // may need to update data after this line to ensure the data matches up
    // setFormData({
    //   ...formData,
    //   // TODO: replace id, not meant to render in UI - for BE purposes
    //   id: "REPLACE THIS WITH ID FROM THE BE",
    // });
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
            Post
          </Button>
        </Footer>
      </Form>
    </Modal>
  );
};

export default NewCommentModal;
