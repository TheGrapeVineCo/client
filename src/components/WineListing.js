import Card from "react-bootstrap/Card";

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
      </Card.Body>
    </Card>
  );
};

export default WineListing;
