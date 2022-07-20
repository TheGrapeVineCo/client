import WineListing from "./WineListing";

const WineListings = ({ wineListings }) => {
  return (
    <>
      <p>Hello world!</p>
      {wineListings.map((listing) => (
        <WineListing key={listing.id} listing={listing} />
      ))}
    </>
  );
};

export default WineListings;
