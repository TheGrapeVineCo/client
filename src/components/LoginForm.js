import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button is working");
  };

  const handleUser = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={user}
          onChange={handleUser}
        />
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="m-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
