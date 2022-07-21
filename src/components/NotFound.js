import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Uh oh! Page not found!</h3>
      <Link to="/wineListings">Return to Wine Listings</Link>
    </>
  );
};

export default NotFound;
