import WineListing from "./WineListing";

const WineListings = ({ loggedInUser, wineListings }) => {
  return (
    <>
      <h1>Hello world!</h1>
      {wineListings.map((listing) => (
        <WineListing
          key={listing.id}
          listing={listing}
          loggedInUser={loggedInUser}
        />
      ))}
    </>
  );
};

export default WineListings;
