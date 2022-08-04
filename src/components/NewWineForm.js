import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

// somehow need to pass eg. "loggedInAdmin" param so only admins can fill out this form
function NewWineForm() {
  const { store, dispatch } = useGlobalState();
  const { wineListings } = store;
  const navigate = useNavigate();
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

  // adds new wine listing to list of wine listings
  const addNewWineListing = ({
    brand,
    grape_variety,
    year,
    category,
    country,
    region,
    description,
  }) => {
    const newListing = {
      brand: brand,
      grape_variety: grape_variety,
      year: year,
      category: category,
      country: country,
      region: region,
      description: description,
      id: wineListings[0].id + 1,
    };
    dispatch({
      type: "addNewWineListing",
      data: newListing,
    });
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
    addNewWineListing(formData);
    clearFormData();
    // may need to change to admin dashboard
    navigate("/login");
  };

  //   clears the form data for next entry
  const clearFormData = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <h2 className="page-title">Create a New Wine Listing 🍷</h2>
      <Form onSubmit={handleSubmit} className="cwl-container ">
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="brand">
              <Form.Label className="text-detail">Brand</Form.Label>
              <Form.Control
                type="string"
                placeholder="Enter wine brand"
                value={formData.brand}
                onChange={handleFormData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="grape_variety">
              <Form.Label className="text-detail">Grape Variety</Form.Label>
              <Form.Control
                type="string"
                placeholder="Shiraz, Merlot, Sauvignon Blanc..."
                value={formData.grape_variety}
                onChange={handleFormData}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
              <Form.Label className="text-detail">Year</Form.Label>
              <Form.Control
                type="integer"
                placeholder="Year"
                value={formData.year}
                onChange={handleFormData}
              />
            </Form.Group>
          </Col>

          <Col lg={6} md={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label className="text-detail">Category</Form.Label>
              <Form.Control
                type="string"
                placeholder="Red, White, Sparkling..."
                value={formData.category}
                onChange={handleFormData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label className="text-detail">Country</Form.Label>
              <Form.Control
                type="string"
                placeholder="Australia"
                value={formData.country}
                onChange={handleFormData}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="region">
              <Form.Label className="text-detail">Region</Form.Label>
              <Form.Control
                type="string"
                placeholder="Barossa Valley, Margaret River..."
                value={formData.region}
                onChange={handleFormData}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-3" controlId="description">
            <Col lg={6} md={12} sm={12} xs={12}>
              <Form.Label className="text-detail">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe the wine..."
                value={formData.description}
                onChange={handleFormData}
                className={"desc-textarea"}
              />
            </Col>
          </Form.Group>
        </Row>
        <Form.Group className="button-form">
          <Button
            className="btn-default button-mob"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default NewWineForm;
