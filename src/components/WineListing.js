import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const WineListing = ({ listing }) => {
  return (
    <Card>
      <Card.Body>
        <p>{listing.brand}</p>
        <p>{listing.grape_variety}</p>
        <p>{listing.year}</p>
        <p>{listing.category}</p>
        <p>{listing.country}</p>
        <p>{listing.region}</p>
        <p>{listing.description}</p>
        {/* Need to work on comments feature */}
        <a href="/">View Comments...</a>
        <Link to="comments/new" href="/">
          Add Comment
        </Link>
      </Card.Body>
    </Card>
  );
};

export default WineListing;
