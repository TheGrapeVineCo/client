import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";

// Renders individual wine listing
const WineListing = ({ loggedInUser, listing, commentList }) => {
  const [showComments, setShowComments] = useState(false);
  const handleComments = () => {
    setShowComments(!showComments);
  };
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

        {/* Coerce commentList length to boolean value to render button */}
        {!!commentList.length && (
          <>
            <Button variant="link" onClick={handleComments}>
              {showComments ? `Hide` : `View`} Comments...
            </Button>
            {showComments && <Comments commentList={commentList} />}
          </>
        )}

        {/* Only render comments link if user logged in */}
        {loggedInUser && <Card.Link href="/">Add Comment</Card.Link>}
      </Card.Body>
    </Card>
  );
};

export default WineListing;
