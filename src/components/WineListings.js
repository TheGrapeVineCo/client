import WineListing from "./WineListing";

const WineListings = ({
  loggedInUser,
  wineListings,
  allComments,
  addComment,
}) => {
  return (
    <>
      <h1>Hello world!</h1>
      {wineListings.map((listing) => {
        // Iterate over all comments
        // Pick out comments that belong to post
        // Pass those comments as a list to <WineListing>

        const comments = [];
        allComments.forEach((c) => {
          if (listing.id === c.wine_listing_id) {
            comments.push(c);
          }
        });
        console.log({ comments, id: listing.id });

        return (
          <WineListing
            key={listing.id}
            listing={listing}
            loggedInUser={loggedInUser}
            commentList={comments}
            addComment={addComment}
          />
        );
      })}
    </>
  );
};

export default WineListings;
