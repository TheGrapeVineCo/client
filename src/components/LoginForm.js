import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
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
    dispatch({
      type: "setLoggedInUser",
      data: formData.email,
    });
    setFormData(initialFormData);
    e.preventDefault();
    navigate("/wineListings");
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="email">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleFormData}
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleFormData}
          />
        </Form.Group>
        <Button className="m-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Link to="/signup">Wine not signup?</Link>
    </>
  );
}

export default LoginForm;
