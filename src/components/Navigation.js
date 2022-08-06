import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const { Toggle, Brand, Collapse } = Navbar;
const { Item, Divider } = NavDropdown;
const Navigation = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  const navigate = useNavigate();

  // performs logout function by clearing the loggedin user and redirects to home page
  const logout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    dispatch({
      type: "setLoggedInUser",
      data: {},
    });

    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="nav-font">
      <Container fluid className="nav-bg">
        <Brand href="/" className="nav-bg nav-title">
          The GrapeVine
        </Brand>
        <Toggle />
        <Collapse>
          <Nav className="nav-bg justify-content-end flex-grow-1 pe-3">
            {loggedInUser.id ? (
              <>
                <h4>Logged in as {loggedInUser.username}</h4>
              </>
            ) : null}

            <Nav.Link as={Link} to="/wineListings" className="nav-bg">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#000000"
                className="nav-bg bi bi-house-fill"
                viewBox="0 0 16 16"
                alt="home"
              >
                <path
                  fillRule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/ratings" className="nav-bg">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#000000"
                className="nav-bg bi bi-award-fill"
                viewBox="0 0 16 16"
                alt="ratings"
              >
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
            </Nav.Link>
            <NavDropdown
              className="nav-bg"
              title={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#000000"
                  className="nav-bg bi bi-person-circle"
                  viewBox="0 0 16 16"
                  alt="user"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              }
              id="basic-navbar-nav el-show"
            >
              {loggedInUser.id ? (
                <>
                  {/* TODO: Need to include logic for only admin to have access to NewWineForm */}
                  <Item as={Link} to="/newListing" className="nav-bg">
                    Create New Listing
                  </Item>
                  <Item as={Link} to="/about" className="nav-bg">
                    About
                  </Item>
                  <Item as={Link} to="/myWines" className="nav-bg">
                    My Wines
                  </Item>
                  <Item
                    className="nav-bg"
                    as={Link}
                    to="/wineListings"
                    onClick={logout}
                  >
                    Logout
                  </Item>
                  <Divider />
                  <Item as={Link} to="/contact" className="nav-bg">
                    Contact Us
                  </Item>
                </>
              ) : (
                <>
                  <Item as={Link} to="/about" className="nav-bg">
                    About
                  </Item>
                  <Item as={Link} to="/login" className="nav-bg">
                    Login
                  </Item>
                  <Item as={Link} to="/signup" className="nav-bg">
                    Sign-up
                  </Item>
                  <Divider className="nav-bg" />
                  <Item as={Link} to="/contact" className="nav-bg">
                    Contact Us
                  </Item>
                </>
              )}
            </NavDropdown>
          </Nav>
          <Form className="d-flex nav-bg">
            <Form.Control
              type="search"
              placeholder="Search"
              className="nav-bg me-2"
              aria-label="Search"
            />
            <Button className="btn-default">Search</Button>
          </Form>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
