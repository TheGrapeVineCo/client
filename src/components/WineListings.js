import WineListing from "./WineListing";

const WineListings = ({ wineListings }) => {
  return (
    <>
      <h1>Hello world!</h1>
      {wineListings.map((listing) => (
        <WineListing key={listing.id} listing={listing} />
      ))}
    </>
  );
};

export default WineListings;
