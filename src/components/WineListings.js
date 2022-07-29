import { useGlobalState } from "../utils/stateContext";
import WineListing from "./WineListing";

const WineListings = () => {
  const { store } = useGlobalState();
  const { wineListings, allComments, addComment } = store;

  return (
    <>
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

        return (
          <WineListing
            key={listing.id}
            listing={listing}
            commentList={comments}
            addComment={addComment}
          />
        );
      })}
    </>
  );
};

export default WineListings;
