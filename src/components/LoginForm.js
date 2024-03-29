import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { logIn } from "../services/authServices";
import LoginImg from "../assets/login.jpg";

function LoginForm() {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  // creates initial form data as clean fields
  const initialFormData = {
    email: "",
    password: "",
  };

  // upon successful sign-in, user is directed to wineListings
  const [formData, setFormData] = useState(initialFormData);

  // upon successful sign-in, user is directed to wineListings
  const handleSubmit = (e) => {
    e.preventDefault();

    logIn(formData)
      .then((data) => {
        const { jwt, username, userID } = data;
        sessionStorage.setItem("token", JSON.stringify(jwt));
        sessionStorage.setItem("username", JSON.stringify(username));
        sessionStorage.setItem("user_id", JSON.stringify(userID));
        dispatch({
          type: "setLoggedInUser",
          data: {
            username,
            id: userID,
          },
        });
        dispatch({
          type: "setToken",
          data: jwt,
        });
        setFormData(initialFormData);
        navigate("/wineListings");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <h2 className="page-title">Login</h2>
      <Card className="signup-specs">
        <Image
          src={LoginImg}
          alt="Hero Image"
          height={480}
          rounded
          className="d-none d-sm-block"
        />
        <Form onSubmit={handleSubmit} className="input-form">
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
          <Form.Group className="button-form">
            <Button
              className="m-3 btn-default button-mob"
              variant="primary"
              type="submit"
              value="post"
            >
              Login
            </Button>
          </Form.Group>
          {/* can't get hover styling to work here - impacts other components */}
          <div className="button-form">
            <Link to="/signup" className="m-3 custom-link">
              Wine not signup?
            </Link>
          </div>
        </Form>
      </Card>
    </>
  );
}

export default LoginForm;
