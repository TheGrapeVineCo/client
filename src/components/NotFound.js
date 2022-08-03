import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>404</h1>
        <h3>Uh oh! Page not found!</h3>
        <Link to="/wineListings" className="custom-link">
          Return to Wine Listings
        </Link>
      </div>
    </>
  );
};

export default NotFound;
