import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

// TODO: need to pass a "loggedInAdmin" param so only admins can fill out this form
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

  // obtains data from new wine listing
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // needs validation to ensure empty data is submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewWineListing(formData);
    clearFormData();
    // may need to change to admin dashboard
    navigate("/wineListings");
  };

  // clears the form data for next entry
  const clearFormData = () => {
    setFormData(initialFormData);
  };

  const { Group, Label, Control } = Form;
  return (
    <>
      <h2 className="page-title">Create a New Wine Listing 🍷</h2>
      <Form onSubmit={handleSubmit} className="cwl-container ">
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Group className="mb-3" controlId="brand">
              <Label className="text-detail">Brand</Label>
              <Control
                type="string"
                placeholder="Enter wine brand"
                value={formData.brand}
                onChange={handleFormData}
              />
            </Group>
            <Group className="mb-3" controlId="grape_variety">
              <Label className="text-detail">Grape Variety</Label>
              <Control
                type="string"
                placeholder="Shiraz, Merlot, Sauvignon Blanc..."
                value={formData.grape_variety}
                onChange={handleFormData}
              />
            </Group>

            <Group className="mb-3" controlId="year">
              <Label className="text-detail">Year</Label>
              <Control
                type="integer"
                placeholder="Year"
                value={formData.year}
                onChange={handleFormData}
              />
            </Group>
          </Col>

          <Col lg={6} md={12} sm={12} xs={12}>
            <Group className="mb-3" controlId="category">
              <Label className="text-detail">Category</Label>
              <Control
                type="string"
                placeholder="Red, White, Sparkling..."
                value={formData.category}
                onChange={handleFormData}
              />
            </Group>
            <Group className="mb-3" controlId="country">
              <Label className="text-detail">Country</Label>
              <Control
                type="string"
                placeholder="Australia"
                value={formData.country}
                onChange={handleFormData}
              />
            </Group>
            <Group className="mb-3" controlId="region">
              <Label className="text-detail">Region</Label>
              <Control
                type="string"
                placeholder="Barossa Valley, Margaret River..."
                value={formData.region}
                onChange={handleFormData}
              />
            </Group>
          </Col>
          <Group className="mb-3" controlId="description">
            <Col lg={6} md={12} sm={12} xs={12}>
              <Label className="text-detail">Description</Label>
              <Control
                as="textarea"
                rows={3}
                placeholder="Describe the wine..."
                value={formData.description}
                onChange={handleFormData}
                className={"desc-textarea"}
              />
            </Col>
          </Group>
        </Row>
        <Group className="button-form">
          <Button
            className="btn-default button-mob"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Group>
      </Form>
    </>
  );
}

export default NewWineForm;
