import { useState } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";

function SignUpForm() {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();
  // creates initial form data as clean fields
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  // upon successful sign-in, user is directed to wineListings
  const [formData, setFormData] = useState(initialFormData);

  // upon successful sign-in, user is directed to wineListings
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("You clicked Sign Up")
    // console.log(formData)

    signUp(formData)
    .then((user) => {
      sessionStorage.setItem("username", user.username)
      sessionStorage.setItem("token", user.jwt)
      // may need to change formData.email to formData.username
      dispatch({
        type: "setLoggedInUser",
        // data: formData.email,
        data: user.username
      });
      dispatch({
        type: "setToken",
        data: user.jwt
      })
      setFormData(initialFormData);
      navigate("/wineListings");
    })
    .catch(e => {console.log(e)})
  };
  

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <h2 className="page-title">Sign Up With The GrapeVine 🍇</h2>
      <Card className="signup-specs">
        <Image
          src="assets/alternate-wine.jpg"
          height={480}
          rounded
          className="d-none d-sm-block"
        />
        <Form
          onSubmit={handleSubmit}
          prefixes={{ btn: "my-btn" }}
          className="input-form"
        >
          <Form.Group className="m-3" controlId="username">
            <Form.Label className="text-detail">Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleFormData}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="email">
            <Form.Label className="text-detail">Email Address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleFormData}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="password">
            <Form.Label className="text-detail">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleFormData}
            />
          </Form.Group>
          <Form.Group className="m-3" controlId="password_confirmation">
            <Form.Label className="text-detail">
              Password Confirmation
            </Form.Label>
            <Form.Control
              type="password"
              name="password_confirmation"
              placeholder="Password"
              value={formData.password_confirmation}
              onChange={handleFormData}
            />
          </Form.Group>
          <Form.Group className="button-form">
            <Button
              className="m-3 btn-default button-mob"
              variant="primary"
              type="submit"
            >
              Sign up
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </>
  );
}

export default SignUpForm;
