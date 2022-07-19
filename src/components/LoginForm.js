import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({ activateUser }) {
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
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleFormData}
        />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFormData}
        />
      </Form.Group>
      <Button className="m-3" variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
