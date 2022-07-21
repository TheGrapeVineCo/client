import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function LoginForm({ activateUser }) {
  const navigate = useNavigate();

  // upon successful sign-in, user is directed to wineListings
  const login = (e) => {
    e.preventDefault();
    navigate("/wineListings");
  };

  // creates initial form data as clean fields
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button is working");
    console.log(formData);
    activateUser(formData.email);
    setFormData(initialFormData);
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
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
      <Button className="m-3" variant="primary" type="submit" onClick={login}>
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
