import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

// somehow need to pass eg. "loggedInAdmin" param so only admins can fill out this form
function NewWineForm({ addNewWineListing }) {
  // Sets initial fields as empty
  const initialFormData = {
    brand: "",
    grape_variety: "",
    year: "",
    category: "",
    country: "",
    region: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  //   obtains data from new wine listing
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //   needs validation to ensure empty data is submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // console.log(e.target.value); renders undefined
    addNewWineListing(formData);
    clearFormData();
  };

  //   clears the form data for next entry
  const clearFormData = () => {
    setFormData(initialFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter wine brand"
            value={formData.brand}
            onChange={handleFormData}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="grape_variety">
          <Form.Label>Grape Variety</Form.Label>
          <Form.Control
            type="string"
            placeholder="Shiraz, Merlot, Sauvignon Blanc..."
            value={formData.grape_variety}
            onChange={handleFormData}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="integer"
            placeholder="Year"
            value={formData.year}
            onChange={handleFormData}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="string"
            placeholder="Red, White, Sparkling..."
            value={formData.category}
            onChange={handleFormData}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="string"
            placeholder="Australia"
            value={formData.country}
            onChange={handleFormData}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="region">
          <Form.Label>Region</Form.Label>
          <Form.Control
            type="string"
            placeholder="Barossa Valley, Margaret River..."
            value={formData.region}
            onChange={handleFormData}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Describe the wine..."
          value={formData.description}
          onChange={handleFormData}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewWineForm;
